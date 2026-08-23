import React from 'react';
const LABEL_39169 = 'component_39169';
export function Component39169({ value = 39169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39169, 'data-value': derived.doubled }, children);
}
export default Component39169;
