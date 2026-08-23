import React from 'react';
const LABEL_28353 = 'component_28353';
export function Component28353({ value = 28353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28353, 'data-value': derived.doubled }, children);
}
export default Component28353;
