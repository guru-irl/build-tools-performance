import React from 'react';
const LABEL_44540 = 'component_44540';
export function Component44540({ value = 44540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44540, 'data-value': derived.doubled }, children);
}
export default Component44540;
