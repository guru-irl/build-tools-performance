import React from 'react';
const LABEL_26850 = 'component_26850';
export function Component26850({ value = 26850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26850, 'data-value': derived.doubled }, children);
}
export default Component26850;
