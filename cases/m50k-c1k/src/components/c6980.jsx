import React from 'react';
const LABEL_6980 = 'component_6980';
export function Component6980({ value = 6980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6980, 'data-value': derived.doubled }, children);
}
export default Component6980;
