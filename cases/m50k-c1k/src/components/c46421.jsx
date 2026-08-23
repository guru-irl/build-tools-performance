import React from 'react';
const LABEL_46421 = 'component_46421';
export function Component46421({ value = 46421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46421, 'data-value': derived.doubled }, children);
}
export default Component46421;
