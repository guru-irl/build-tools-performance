import React from 'react';
const LABEL_32143 = 'component_32143';
export function Component32143({ value = 32143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32143, 'data-value': derived.doubled }, children);
}
export default Component32143;
