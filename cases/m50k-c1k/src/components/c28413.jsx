import React from 'react';
const LABEL_28413 = 'component_28413';
export function Component28413({ value = 28413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28413, 'data-value': derived.doubled }, children);
}
export default Component28413;
