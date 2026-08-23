import React from 'react';
const LABEL_4189 = 'component_4189';
export function Component4189({ value = 4189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4189, 'data-value': derived.doubled }, children);
}
export default Component4189;
