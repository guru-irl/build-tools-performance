import React from 'react';
const LABEL_7943 = 'component_7943';
export function Component7943({ value = 7943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7943, 'data-value': derived.doubled }, children);
}
export default Component7943;
