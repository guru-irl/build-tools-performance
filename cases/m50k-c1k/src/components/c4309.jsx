import React from 'react';
const LABEL_4309 = 'component_4309';
export function Component4309({ value = 4309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4309, 'data-value': derived.doubled }, children);
}
export default Component4309;
