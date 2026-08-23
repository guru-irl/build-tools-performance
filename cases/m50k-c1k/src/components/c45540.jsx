import React from 'react';
const LABEL_45540 = 'component_45540';
export function Component45540({ value = 45540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45540, 'data-value': derived.doubled }, children);
}
export default Component45540;
