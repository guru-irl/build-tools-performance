import React from 'react';
const LABEL_12394 = 'component_12394';
export function Component12394({ value = 12394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12394, 'data-value': derived.doubled }, children);
}
export default Component12394;
