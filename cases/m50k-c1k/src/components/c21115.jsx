import React from 'react';
const LABEL_21115 = 'component_21115';
export function Component21115({ value = 21115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21115, 'data-value': derived.doubled }, children);
}
export default Component21115;
