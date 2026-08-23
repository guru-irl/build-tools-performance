import React from 'react';
const LABEL_42566 = 'component_42566';
export function Component42566({ value = 42566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42566, 'data-value': derived.doubled }, children);
}
export default Component42566;
