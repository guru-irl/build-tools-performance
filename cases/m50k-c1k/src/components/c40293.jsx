import React from 'react';
const LABEL_40293 = 'component_40293';
export function Component40293({ value = 40293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40293, 'data-value': derived.doubled }, children);
}
export default Component40293;
