import React from 'react';
const LABEL_39175 = 'component_39175';
export function Component39175({ value = 39175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39175, 'data-value': derived.doubled }, children);
}
export default Component39175;
