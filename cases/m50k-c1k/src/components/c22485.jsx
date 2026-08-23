import React from 'react';
const LABEL_22485 = 'component_22485';
export function Component22485({ value = 22485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22485, 'data-value': derived.doubled }, children);
}
export default Component22485;
