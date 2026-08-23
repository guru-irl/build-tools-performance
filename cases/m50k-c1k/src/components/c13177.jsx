import React from 'react';
const LABEL_13177 = 'component_13177';
export function Component13177({ value = 13177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13177, 'data-value': derived.doubled }, children);
}
export default Component13177;
