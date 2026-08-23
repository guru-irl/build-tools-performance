import React from 'react';
const LABEL_26072 = 'component_26072';
export function Component26072({ value = 26072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26072, 'data-value': derived.doubled }, children);
}
export default Component26072;
