import React from 'react';
const LABEL_7293 = 'component_7293';
export function Component7293({ value = 7293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7293, 'data-value': derived.doubled }, children);
}
export default Component7293;
