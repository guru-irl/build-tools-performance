import React from 'react';
const LABEL_26383 = 'component_26383';
export function Component26383({ value = 26383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26383, 'data-value': derived.doubled }, children);
}
export default Component26383;
