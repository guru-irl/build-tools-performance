import React from 'react';
const LABEL_357 = 'component_357';
export function Component357({ value = 357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_357, 'data-value': derived.doubled }, children);
}
export default Component357;
