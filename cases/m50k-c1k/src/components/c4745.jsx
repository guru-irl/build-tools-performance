import React from 'react';
const LABEL_4745 = 'component_4745';
export function Component4745({ value = 4745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4745, 'data-value': derived.doubled }, children);
}
export default Component4745;
