import React from 'react';
const LABEL_45161 = 'component_45161';
export function Component45161({ value = 45161, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45161, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45161, 'data-value': derived.doubled }, children);
}
export default Component45161;
