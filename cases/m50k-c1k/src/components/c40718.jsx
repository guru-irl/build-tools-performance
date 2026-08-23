import React from 'react';
const LABEL_40718 = 'component_40718';
export function Component40718({ value = 40718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40718, 'data-value': derived.doubled }, children);
}
export default Component40718;
