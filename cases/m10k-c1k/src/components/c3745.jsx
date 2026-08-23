import React from 'react';
const LABEL_3745 = 'component_3745';
export function Component3745({ value = 3745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3745, 'data-value': derived.doubled }, children);
}
export default Component3745;
