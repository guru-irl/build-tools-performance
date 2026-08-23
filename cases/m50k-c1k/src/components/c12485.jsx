import React from 'react';
const LABEL_12485 = 'component_12485';
export function Component12485({ value = 12485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12485, 'data-value': derived.doubled }, children);
}
export default Component12485;
