import React from 'react';
const LABEL_11485 = 'component_11485';
export function Component11485({ value = 11485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11485, 'data-value': derived.doubled }, children);
}
export default Component11485;
