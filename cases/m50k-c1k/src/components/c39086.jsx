import React from 'react';
const LABEL_39086 = 'component_39086';
export function Component39086({ value = 39086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39086, 'data-value': derived.doubled }, children);
}
export default Component39086;
