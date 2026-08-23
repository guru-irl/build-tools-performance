import React from 'react';
const LABEL_23394 = 'component_23394';
export function Component23394({ value = 23394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23394, 'data-value': derived.doubled }, children);
}
export default Component23394;
