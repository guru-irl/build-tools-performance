import React from 'react';
const LABEL_11679 = 'component_11679';
export function Component11679({ value = 11679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11679, 'data-value': derived.doubled }, children);
}
export default Component11679;
