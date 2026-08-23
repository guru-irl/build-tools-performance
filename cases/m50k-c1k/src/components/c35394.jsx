import React from 'react';
const LABEL_35394 = 'component_35394';
export function Component35394({ value = 35394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35394, 'data-value': derived.doubled }, children);
}
export default Component35394;
