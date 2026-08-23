import React from 'react';
const LABEL_26194 = 'component_26194';
export function Component26194({ value = 26194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26194, 'data-value': derived.doubled }, children);
}
export default Component26194;
