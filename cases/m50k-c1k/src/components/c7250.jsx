import React from 'react';
const LABEL_7250 = 'component_7250';
export function Component7250({ value = 7250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7250, 'data-value': derived.doubled }, children);
}
export default Component7250;
