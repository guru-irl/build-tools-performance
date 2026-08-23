import React from 'react';
const LABEL_12408 = 'component_12408';
export function Component12408({ value = 12408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12408, 'data-value': derived.doubled }, children);
}
export default Component12408;
