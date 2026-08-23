import React from 'react';
const LABEL_34745 = 'component_34745';
export function Component34745({ value = 34745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34745, 'data-value': derived.doubled }, children);
}
export default Component34745;
