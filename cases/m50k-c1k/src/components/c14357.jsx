import React from 'react';
const LABEL_14357 = 'component_14357';
export function Component14357({ value = 14357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14357, 'data-value': derived.doubled }, children);
}
export default Component14357;
