import React from 'react';
const LABEL_46596 = 'component_46596';
export function Component46596({ value = 46596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46596, 'data-value': derived.doubled }, children);
}
export default Component46596;
