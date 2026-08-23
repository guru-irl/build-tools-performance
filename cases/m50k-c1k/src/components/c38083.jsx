import React from 'react';
const LABEL_38083 = 'component_38083';
export function Component38083({ value = 38083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38083, 'data-value': derived.doubled }, children);
}
export default Component38083;
