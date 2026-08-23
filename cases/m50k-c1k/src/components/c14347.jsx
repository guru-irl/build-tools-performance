import React from 'react';
const LABEL_14347 = 'component_14347';
export function Component14347({ value = 14347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14347, 'data-value': derived.doubled }, children);
}
export default Component14347;
