import React from 'react';
const LABEL_312 = 'component_312';
export function Component312({ value = 312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_312, 'data-value': derived.doubled }, children);
}
export default Component312;
