import React from 'react';
const LABEL_24290 = 'component_24290';
export function Component24290({ value = 24290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24290, 'data-value': derived.doubled }, children);
}
export default Component24290;
