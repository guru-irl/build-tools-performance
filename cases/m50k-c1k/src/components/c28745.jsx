import React from 'react';
const LABEL_28745 = 'component_28745';
export function Component28745({ value = 28745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28745, 'data-value': derived.doubled }, children);
}
export default Component28745;
