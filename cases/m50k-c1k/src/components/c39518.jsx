import React from 'react';
const LABEL_39518 = 'component_39518';
export function Component39518({ value = 39518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39518, 'data-value': derived.doubled }, children);
}
export default Component39518;
