import React from 'react';
const LABEL_22745 = 'component_22745';
export function Component22745({ value = 22745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22745, 'data-value': derived.doubled }, children);
}
export default Component22745;
