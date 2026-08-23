import React from 'react';
const LABEL_24190 = 'component_24190';
export function Component24190({ value = 24190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24190, 'data-value': derived.doubled }, children);
}
export default Component24190;
