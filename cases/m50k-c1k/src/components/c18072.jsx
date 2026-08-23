import React from 'react';
const LABEL_18072 = 'component_18072';
export function Component18072({ value = 18072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18072, 'data-value': derived.doubled }, children);
}
export default Component18072;
