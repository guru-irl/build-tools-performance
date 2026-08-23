import React from 'react';
const LABEL_7656 = 'component_7656';
export function Component7656({ value = 7656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7656, 'data-value': derived.doubled }, children);
}
export default Component7656;
