import React from 'react';
const LABEL_20745 = 'component_20745';
export function Component20745({ value = 20745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20745, 'data-value': derived.doubled }, children);
}
export default Component20745;
