import React from 'react';
const LABEL_4206 = 'component_4206';
export function Component4206({ value = 4206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4206, 'data-value': derived.doubled }, children);
}
export default Component4206;
