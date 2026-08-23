import React from 'react';
const LABEL_29208 = 'component_29208';
export function Component29208({ value = 29208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29208, 'data-value': derived.doubled }, children);
}
export default Component29208;
