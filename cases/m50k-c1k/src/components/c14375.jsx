import React from 'react';
const LABEL_14375 = 'component_14375';
export function Component14375({ value = 14375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14375, 'data-value': derived.doubled }, children);
}
export default Component14375;
