import React from 'react';
const LABEL_6313 = 'component_6313';
export function Component6313({ value = 6313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6313, 'data-value': derived.doubled }, children);
}
export default Component6313;
