import React from 'react';
const LABEL_3299 = 'component_3299';
export function Component3299({ value = 3299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3299, 'data-value': derived.doubled }, children);
}
export default Component3299;
