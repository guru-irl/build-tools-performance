import React from 'react';
const LABEL_31700 = 'component_31700';
export function Component31700({ value = 31700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31700, 'data-value': derived.doubled }, children);
}
export default Component31700;
