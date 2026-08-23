import React from 'react';
const LABEL_28923 = 'component_28923';
export function Component28923({ value = 28923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28923, 'data-value': derived.doubled }, children);
}
export default Component28923;
