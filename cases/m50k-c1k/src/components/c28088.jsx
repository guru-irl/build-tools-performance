import React from 'react';
const LABEL_28088 = 'component_28088';
export function Component28088({ value = 28088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28088, 'data-value': derived.doubled }, children);
}
export default Component28088;
