import React from 'react';
const LABEL_30114 = 'component_30114';
export function Component30114({ value = 30114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30114, 'data-value': derived.doubled }, children);
}
export default Component30114;
