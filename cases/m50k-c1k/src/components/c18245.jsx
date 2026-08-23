import React from 'react';
const LABEL_18245 = 'component_18245';
export function Component18245({ value = 18245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18245, 'data-value': derived.doubled }, children);
}
export default Component18245;
