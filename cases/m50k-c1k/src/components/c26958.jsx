import React from 'react';
const LABEL_26958 = 'component_26958';
export function Component26958({ value = 26958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26958, 'data-value': derived.doubled }, children);
}
export default Component26958;
