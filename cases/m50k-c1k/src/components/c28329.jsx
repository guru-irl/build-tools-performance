import React from 'react';
const LABEL_28329 = 'component_28329';
export function Component28329({ value = 28329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28329, 'data-value': derived.doubled }, children);
}
export default Component28329;
