import React from 'react';
const LABEL_25014 = 'component_25014';
export function Component25014({ value = 25014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25014, 'data-value': derived.doubled }, children);
}
export default Component25014;
