import React from 'react';
const LABEL_5266 = 'component_5266';
export function Component5266({ value = 5266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5266, 'data-value': derived.doubled }, children);
}
export default Component5266;
