import React from 'react';
const LABEL_7312 = 'component_7312';
export function Component7312({ value = 7312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7312, 'data-value': derived.doubled }, children);
}
export default Component7312;
