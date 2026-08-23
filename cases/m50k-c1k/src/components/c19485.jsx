import React from 'react';
const LABEL_19485 = 'component_19485';
export function Component19485({ value = 19485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19485, 'data-value': derived.doubled }, children);
}
export default Component19485;
