import React from 'react';
const LABEL_6017 = 'component_6017';
export function Component6017({ value = 6017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6017, 'data-value': derived.doubled }, children);
}
export default Component6017;
