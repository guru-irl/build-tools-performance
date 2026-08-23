import React from 'react';
const LABEL_6039 = 'component_6039';
export function Component6039({ value = 6039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6039, 'data-value': derived.doubled }, children);
}
export default Component6039;
