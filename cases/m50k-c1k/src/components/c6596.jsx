import React from 'react';
const LABEL_6596 = 'component_6596';
export function Component6596({ value = 6596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6596, 'data-value': derived.doubled }, children);
}
export default Component6596;
