import React from 'react';
const LABEL_40114 = 'component_40114';
export function Component40114({ value = 40114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40114, 'data-value': derived.doubled }, children);
}
export default Component40114;
