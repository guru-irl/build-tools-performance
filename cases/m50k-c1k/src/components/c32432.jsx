import React from 'react';
const LABEL_32432 = 'component_32432';
export function Component32432({ value = 32432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32432, 'data-value': derived.doubled }, children);
}
export default Component32432;
