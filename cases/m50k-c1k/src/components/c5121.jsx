import React from 'react';
const LABEL_5121 = 'component_5121';
export function Component5121({ value = 5121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5121, 'data-value': derived.doubled }, children);
}
export default Component5121;
