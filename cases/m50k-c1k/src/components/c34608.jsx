import React from 'react';
const LABEL_34608 = 'component_34608';
export function Component34608({ value = 34608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34608, 'data-value': derived.doubled }, children);
}
export default Component34608;
