import React from 'react';
const LABEL_16061 = 'component_16061';
export function Component16061({ value = 16061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16061, 'data-value': derived.doubled }, children);
}
export default Component16061;
