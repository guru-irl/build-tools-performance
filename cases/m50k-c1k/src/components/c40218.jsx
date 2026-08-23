import React from 'react';
const LABEL_40218 = 'component_40218';
export function Component40218({ value = 40218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40218, 'data-value': derived.doubled }, children);
}
export default Component40218;
