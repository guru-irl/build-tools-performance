import React from 'react';
const LABEL_24109 = 'component_24109';
export function Component24109({ value = 24109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24109, 'data-value': derived.doubled }, children);
}
export default Component24109;
