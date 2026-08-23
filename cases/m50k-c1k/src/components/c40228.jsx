import React from 'react';
const LABEL_40228 = 'component_40228';
export function Component40228({ value = 40228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40228, 'data-value': derived.doubled }, children);
}
export default Component40228;
