import React from 'react';
const LABEL_22361 = 'component_22361';
export function Component22361({ value = 22361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22361, 'data-value': derived.doubled }, children);
}
export default Component22361;
