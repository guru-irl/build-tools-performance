import React from 'react';
const LABEL_32195 = 'component_32195';
export function Component32195({ value = 32195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32195, 'data-value': derived.doubled }, children);
}
export default Component32195;
