import React from 'react';
const LABEL_5912 = 'component_5912';
export function Component5912({ value = 5912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5912, 'data-value': derived.doubled }, children);
}
export default Component5912;
