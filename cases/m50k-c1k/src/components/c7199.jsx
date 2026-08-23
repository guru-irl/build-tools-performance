import React from 'react';
const LABEL_7199 = 'component_7199';
export function Component7199({ value = 7199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7199, 'data-value': derived.doubled }, children);
}
export default Component7199;
