import React from 'react';
const LABEL_26739 = 'component_26739';
export function Component26739({ value = 26739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26739, 'data-value': derived.doubled }, children);
}
export default Component26739;
