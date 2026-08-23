import React from 'react';
const LABEL_36973 = 'component_36973';
export function Component36973({ value = 36973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36973, 'data-value': derived.doubled }, children);
}
export default Component36973;
