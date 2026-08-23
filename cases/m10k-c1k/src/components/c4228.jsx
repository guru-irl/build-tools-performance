import React from 'react';
const LABEL_4228 = 'component_4228';
export function Component4228({ value = 4228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4228, 'data-value': derived.doubled }, children);
}
export default Component4228;
