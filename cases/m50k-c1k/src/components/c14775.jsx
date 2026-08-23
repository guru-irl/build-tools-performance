import React from 'react';
const LABEL_14775 = 'component_14775';
export function Component14775({ value = 14775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14775, 'data-value': derived.doubled }, children);
}
export default Component14775;
