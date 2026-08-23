import React from 'react';
const LABEL_18104 = 'component_18104';
export function Component18104({ value = 18104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18104, 'data-value': derived.doubled }, children);
}
export default Component18104;
