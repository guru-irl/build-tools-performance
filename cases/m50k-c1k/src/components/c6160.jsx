import React from 'react';
const LABEL_6160 = 'component_6160';
export function Component6160({ value = 6160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6160, 'data-value': derived.doubled }, children);
}
export default Component6160;
