import React from 'react';
const LABEL_33244 = 'component_33244';
export function Component33244({ value = 33244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33244, 'data-value': derived.doubled }, children);
}
export default Component33244;
