import React from 'react';
const LABEL_5027 = 'component_5027';
export function Component5027({ value = 5027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5027, 'data-value': derived.doubled }, children);
}
export default Component5027;
