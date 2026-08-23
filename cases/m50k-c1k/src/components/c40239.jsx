import React from 'react';
const LABEL_40239 = 'component_40239';
export function Component40239({ value = 40239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40239, 'data-value': derived.doubled }, children);
}
export default Component40239;
