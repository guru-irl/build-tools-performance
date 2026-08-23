import React from 'react';
const LABEL_18127 = 'component_18127';
export function Component18127({ value = 18127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18127, 'data-value': derived.doubled }, children);
}
export default Component18127;
