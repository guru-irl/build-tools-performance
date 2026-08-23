import React from 'react';
const LABEL_31621 = 'component_31621';
export function Component31621({ value = 31621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31621, 'data-value': derived.doubled }, children);
}
export default Component31621;
