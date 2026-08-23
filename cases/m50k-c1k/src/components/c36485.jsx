import React from 'react';
const LABEL_36485 = 'component_36485';
export function Component36485({ value = 36485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36485, 'data-value': derived.doubled }, children);
}
export default Component36485;
