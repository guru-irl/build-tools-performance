import React from 'react';
const LABEL_37121 = 'component_37121';
export function Component37121({ value = 37121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37121, 'data-value': derived.doubled }, children);
}
export default Component37121;
