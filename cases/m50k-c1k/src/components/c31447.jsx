import React from 'react';
const LABEL_31447 = 'component_31447';
export function Component31447({ value = 31447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31447, 'data-value': derived.doubled }, children);
}
export default Component31447;
