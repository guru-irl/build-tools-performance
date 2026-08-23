import React from 'react';
const LABEL_45677 = 'component_45677';
export function Component45677({ value = 45677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45677, 'data-value': derived.doubled }, children);
}
export default Component45677;
