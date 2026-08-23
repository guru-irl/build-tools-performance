import React from 'react';
const LABEL_12236 = 'component_12236';
export function Component12236({ value = 12236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12236, 'data-value': derived.doubled }, children);
}
export default Component12236;
