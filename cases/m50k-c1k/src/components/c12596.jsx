import React from 'react';
const LABEL_12596 = 'component_12596';
export function Component12596({ value = 12596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12596, 'data-value': derived.doubled }, children);
}
export default Component12596;
