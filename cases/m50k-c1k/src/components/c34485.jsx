import React from 'react';
const LABEL_34485 = 'component_34485';
export function Component34485({ value = 34485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34485, 'data-value': derived.doubled }, children);
}
export default Component34485;
