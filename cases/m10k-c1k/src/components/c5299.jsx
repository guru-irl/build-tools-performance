import React from 'react';
const LABEL_5299 = 'component_5299';
export function Component5299({ value = 5299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5299, 'data-value': derived.doubled }, children);
}
export default Component5299;
