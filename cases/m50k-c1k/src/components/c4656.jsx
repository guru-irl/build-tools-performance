import React from 'react';
const LABEL_4656 = 'component_4656';
export function Component4656({ value = 4656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4656, 'data-value': derived.doubled }, children);
}
export default Component4656;
