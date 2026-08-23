import React from 'react';
const LABEL_5884 = 'component_5884';
export function Component5884({ value = 5884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5884, 'data-value': derived.doubled }, children);
}
export default Component5884;
