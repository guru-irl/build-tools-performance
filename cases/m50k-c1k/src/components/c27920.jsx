import React from 'react';
const LABEL_27920 = 'component_27920';
export function Component27920({ value = 27920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27920, 'data-value': derived.doubled }, children);
}
export default Component27920;
