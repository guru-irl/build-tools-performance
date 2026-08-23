import React from 'react';
const LABEL_299 = 'component_299';
export function Component299({ value = 299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_299, 'data-value': derived.doubled }, children);
}
export default Component299;
