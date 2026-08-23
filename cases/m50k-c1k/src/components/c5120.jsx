import React from 'react';
const LABEL_5120 = 'component_5120';
export function Component5120({ value = 5120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5120, 'data-value': derived.doubled }, children);
}
export default Component5120;
