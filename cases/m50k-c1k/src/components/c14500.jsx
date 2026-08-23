import React from 'react';
const LABEL_14500 = 'component_14500';
export function Component14500({ value = 14500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14500, 'data-value': derived.doubled }, children);
}
export default Component14500;
