import React from 'react';
const LABEL_24121 = 'component_24121';
export function Component24121({ value = 24121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24121, 'data-value': derived.doubled }, children);
}
export default Component24121;
