import React from 'react';
const LABEL_37228 = 'component_37228';
export function Component37228({ value = 37228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37228, 'data-value': derived.doubled }, children);
}
export default Component37228;
