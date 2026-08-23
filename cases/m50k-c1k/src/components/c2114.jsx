import React from 'react';
const LABEL_2114 = 'component_2114';
export function Component2114({ value = 2114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2114, 'data-value': derived.doubled }, children);
}
export default Component2114;
