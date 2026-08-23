import React from 'react';
const LABEL_6432 = 'component_6432';
export function Component6432({ value = 6432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6432, 'data-value': derived.doubled }, children);
}
export default Component6432;
