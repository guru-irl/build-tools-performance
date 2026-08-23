import React from 'react';
const LABEL_39357 = 'component_39357';
export function Component39357({ value = 39357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39357, 'data-value': derived.doubled }, children);
}
export default Component39357;
