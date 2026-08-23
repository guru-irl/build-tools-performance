import React from 'react';
const LABEL_18305 = 'component_18305';
export function Component18305({ value = 18305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18305, 'data-value': derived.doubled }, children);
}
export default Component18305;
