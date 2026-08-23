import React from 'react';
const LABEL_5316 = 'component_5316';
export function Component5316({ value = 5316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5316, 'data-value': derived.doubled }, children);
}
export default Component5316;
