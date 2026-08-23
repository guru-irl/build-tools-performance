import React from 'react';
const LABEL_14251 = 'component_14251';
export function Component14251({ value = 14251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14251, 'data-value': derived.doubled }, children);
}
export default Component14251;
