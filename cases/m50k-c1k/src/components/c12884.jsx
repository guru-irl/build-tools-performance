import React from 'react';
const LABEL_12884 = 'component_12884';
export function Component12884({ value = 12884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12884, 'data-value': derived.doubled }, children);
}
export default Component12884;
