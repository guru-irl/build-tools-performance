import React from 'react';
const LABEL_24896 = 'component_24896';
export function Component24896({ value = 24896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24896, 'data-value': derived.doubled }, children);
}
export default Component24896;
