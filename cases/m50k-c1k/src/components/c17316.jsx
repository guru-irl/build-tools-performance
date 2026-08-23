import React from 'react';
const LABEL_17316 = 'component_17316';
export function Component17316({ value = 17316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17316, 'data-value': derived.doubled }, children);
}
export default Component17316;
