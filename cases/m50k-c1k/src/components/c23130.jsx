import React from 'react';
const LABEL_23130 = 'component_23130';
export function Component23130({ value = 23130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23130, 'data-value': derived.doubled }, children);
}
export default Component23130;
