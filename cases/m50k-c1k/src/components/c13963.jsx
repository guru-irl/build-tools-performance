import React from 'react';
const LABEL_13963 = 'component_13963';
export function Component13963({ value = 13963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13963, 'data-value': derived.doubled }, children);
}
export default Component13963;
