import React from 'react';
const LABEL_23313 = 'component_23313';
export function Component23313({ value = 23313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23313, 'data-value': derived.doubled }, children);
}
export default Component23313;
