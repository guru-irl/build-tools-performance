import React from 'react';
const LABEL_36312 = 'component_36312';
export function Component36312({ value = 36312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36312, 'data-value': derived.doubled }, children);
}
export default Component36312;
