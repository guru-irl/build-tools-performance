import React from 'react';
const LABEL_24735 = 'component_24735';
export function Component24735({ value = 24735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24735, 'data-value': derived.doubled }, children);
}
export default Component24735;
