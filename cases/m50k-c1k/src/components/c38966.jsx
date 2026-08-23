import React from 'react';
const LABEL_38966 = 'component_38966';
export function Component38966({ value = 38966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38966, 'data-value': derived.doubled }, children);
}
export default Component38966;
