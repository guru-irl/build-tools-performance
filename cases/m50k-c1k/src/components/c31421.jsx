import React from 'react';
const LABEL_31421 = 'component_31421';
export function Component31421({ value = 31421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31421, 'data-value': derived.doubled }, children);
}
export default Component31421;
