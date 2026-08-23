import React from 'react';
const LABEL_730 = 'component_730';
export function Component730({ value = 730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_730, 'data-value': derived.doubled }, children);
}
export default Component730;
