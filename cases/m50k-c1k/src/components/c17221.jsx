import React from 'react';
const LABEL_17221 = 'component_17221';
export function Component17221({ value = 17221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17221, 'data-value': derived.doubled }, children);
}
export default Component17221;
