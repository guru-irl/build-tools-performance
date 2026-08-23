import React from 'react';
const LABEL_36121 = 'component_36121';
export function Component36121({ value = 36121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36121, 'data-value': derived.doubled }, children);
}
export default Component36121;
