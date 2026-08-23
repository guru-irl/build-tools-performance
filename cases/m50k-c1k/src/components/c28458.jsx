import React from 'react';
const LABEL_28458 = 'component_28458';
export function Component28458({ value = 28458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28458, 'data-value': derived.doubled }, children);
}
export default Component28458;
