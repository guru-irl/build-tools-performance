import React from 'react';
const LABEL_33656 = 'component_33656';
export function Component33656({ value = 33656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33656, 'data-value': derived.doubled }, children);
}
export default Component33656;
