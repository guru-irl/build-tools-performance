import React from 'react';
const LABEL_35114 = 'component_35114';
export function Component35114({ value = 35114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35114, 'data-value': derived.doubled }, children);
}
export default Component35114;
