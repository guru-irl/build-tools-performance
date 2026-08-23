import React from 'react';
const LABEL_37114 = 'component_37114';
export function Component37114({ value = 37114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37114, 'data-value': derived.doubled }, children);
}
export default Component37114;
