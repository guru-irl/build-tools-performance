import React from 'react';
const LABEL_3114 = 'component_3114';
export function Component3114({ value = 3114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3114, 'data-value': derived.doubled }, children);
}
export default Component3114;
