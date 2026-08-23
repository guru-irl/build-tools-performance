import React from 'react';
const LABEL_16629 = 'component_16629';
export function Component16629({ value = 16629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16629, 'data-value': derived.doubled }, children);
}
export default Component16629;
