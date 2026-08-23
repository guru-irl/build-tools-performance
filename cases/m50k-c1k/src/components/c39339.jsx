import React from 'react';
const LABEL_39339 = 'component_39339';
export function Component39339({ value = 39339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39339, 'data-value': derived.doubled }, children);
}
export default Component39339;
