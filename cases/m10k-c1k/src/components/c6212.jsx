import React from 'react';
const LABEL_6212 = 'component_6212';
export function Component6212({ value = 6212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6212, 'data-value': derived.doubled }, children);
}
export default Component6212;
