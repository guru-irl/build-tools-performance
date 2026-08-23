import React from 'react';
const LABEL_37999 = 'component_37999';
export function Component37999({ value = 37999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37999, 'data-value': derived.doubled }, children);
}
export default Component37999;
