import React from 'react';
const LABEL_28687 = 'component_28687';
export function Component28687({ value = 28687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28687, 'data-value': derived.doubled }, children);
}
export default Component28687;
