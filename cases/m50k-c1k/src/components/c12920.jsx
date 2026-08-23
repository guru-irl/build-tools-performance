import React from 'react';
const LABEL_12920 = 'component_12920';
export function Component12920({ value = 12920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12920, 'data-value': derived.doubled }, children);
}
export default Component12920;
