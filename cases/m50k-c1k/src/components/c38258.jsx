import React from 'react';
const LABEL_38258 = 'component_38258';
export function Component38258({ value = 38258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38258, 'data-value': derived.doubled }, children);
}
export default Component38258;
