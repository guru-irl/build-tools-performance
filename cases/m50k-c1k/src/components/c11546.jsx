import React from 'react';
const LABEL_11546 = 'component_11546';
export function Component11546({ value = 11546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11546, 'data-value': derived.doubled }, children);
}
export default Component11546;
