import React from 'react';
const LABEL_7485 = 'component_7485';
export function Component7485({ value = 7485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7485, 'data-value': derived.doubled }, children);
}
export default Component7485;
