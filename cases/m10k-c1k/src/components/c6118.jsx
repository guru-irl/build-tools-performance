import React from 'react';
const LABEL_6118 = 'component_6118';
export function Component6118({ value = 6118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6118, 'data-value': derived.doubled }, children);
}
export default Component6118;
