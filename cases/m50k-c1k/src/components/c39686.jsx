import React from 'react';
const LABEL_39686 = 'component_39686';
export function Component39686({ value = 39686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39686, 'data-value': derived.doubled }, children);
}
export default Component39686;
