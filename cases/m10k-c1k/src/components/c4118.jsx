import React from 'react';
const LABEL_4118 = 'component_4118';
export function Component4118({ value = 4118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4118, 'data-value': derived.doubled }, children);
}
export default Component4118;
