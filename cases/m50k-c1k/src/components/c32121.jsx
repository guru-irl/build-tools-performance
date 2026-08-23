import React from 'react';
const LABEL_32121 = 'component_32121';
export function Component32121({ value = 32121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32121, 'data-value': derived.doubled }, children);
}
export default Component32121;
