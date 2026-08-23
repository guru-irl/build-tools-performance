import React from 'react';
const LABEL_16312 = 'component_16312';
export function Component16312({ value = 16312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16312, 'data-value': derived.doubled }, children);
}
export default Component16312;
