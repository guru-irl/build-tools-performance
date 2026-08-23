import React from 'react';
const LABEL_14055 = 'component_14055';
export function Component14055({ value = 14055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14055, 'data-value': derived.doubled }, children);
}
export default Component14055;
