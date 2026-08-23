import React from 'react';
const LABEL_14566 = 'component_14566';
export function Component14566({ value = 14566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14566, 'data-value': derived.doubled }, children);
}
export default Component14566;
