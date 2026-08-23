import React from 'react';
const LABEL_28279 = 'component_28279';
export function Component28279({ value = 28279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28279, 'data-value': derived.doubled }, children);
}
export default Component28279;
