import React from 'react';
const LABEL_16236 = 'component_16236';
export function Component16236({ value = 16236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16236, 'data-value': derived.doubled }, children);
}
export default Component16236;
