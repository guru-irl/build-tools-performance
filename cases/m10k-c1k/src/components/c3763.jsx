import React from 'react';
const LABEL_3763 = 'component_3763';
export function Component3763({ value = 3763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3763, 'data-value': derived.doubled }, children);
}
export default Component3763;
