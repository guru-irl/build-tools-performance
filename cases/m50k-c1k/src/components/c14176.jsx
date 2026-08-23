import React from 'react';
const LABEL_14176 = 'component_14176';
export function Component14176({ value = 14176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14176, 'data-value': derived.doubled }, children);
}
export default Component14176;
