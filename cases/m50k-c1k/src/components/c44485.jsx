import React from 'react';
const LABEL_44485 = 'component_44485';
export function Component44485({ value = 44485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44485, 'data-value': derived.doubled }, children);
}
export default Component44485;
