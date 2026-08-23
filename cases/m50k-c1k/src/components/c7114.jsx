import React from 'react';
const LABEL_7114 = 'component_7114';
export function Component7114({ value = 7114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7114, 'data-value': derived.doubled }, children);
}
export default Component7114;
