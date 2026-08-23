import React from 'react';
const LABEL_28100 = 'component_28100';
export function Component28100({ value = 28100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28100, 'data-value': derived.doubled }, children);
}
export default Component28100;
