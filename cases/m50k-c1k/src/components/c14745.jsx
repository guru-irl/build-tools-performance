import React from 'react';
const LABEL_14745 = 'component_14745';
export function Component14745({ value = 14745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14745, 'data-value': derived.doubled }, children);
}
export default Component14745;
