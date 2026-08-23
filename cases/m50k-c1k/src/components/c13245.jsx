import React from 'react';
const LABEL_13245 = 'component_13245';
export function Component13245({ value = 13245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13245, 'data-value': derived.doubled }, children);
}
export default Component13245;
