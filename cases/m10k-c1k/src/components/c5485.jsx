import React from 'react';
const LABEL_5485 = 'component_5485';
export function Component5485({ value = 5485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5485, 'data-value': derived.doubled }, children);
}
export default Component5485;
