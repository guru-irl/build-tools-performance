import React from 'react';
const LABEL_24884 = 'component_24884';
export function Component24884({ value = 24884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24884, 'data-value': derived.doubled }, children);
}
export default Component24884;
