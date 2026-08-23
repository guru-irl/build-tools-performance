import React from 'react';
const LABEL_39896 = 'component_39896';
export function Component39896({ value = 39896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39896, 'data-value': derived.doubled }, children);
}
export default Component39896;
