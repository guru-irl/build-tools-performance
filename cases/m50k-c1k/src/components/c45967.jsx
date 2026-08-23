import React from 'react';
const LABEL_45967 = 'component_45967';
export function Component45967({ value = 45967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45967, 'data-value': derived.doubled }, children);
}
export default Component45967;
