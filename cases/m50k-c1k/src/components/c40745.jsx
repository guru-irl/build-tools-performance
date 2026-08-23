import React from 'react';
const LABEL_40745 = 'component_40745';
export function Component40745({ value = 40745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40745, 'data-value': derived.doubled }, children);
}
export default Component40745;
