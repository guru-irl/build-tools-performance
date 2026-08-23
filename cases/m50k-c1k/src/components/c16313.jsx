import React from 'react';
const LABEL_16313 = 'component_16313';
export function Component16313({ value = 16313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16313, 'data-value': derived.doubled }, children);
}
export default Component16313;
