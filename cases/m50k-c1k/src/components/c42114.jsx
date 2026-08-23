import React from 'react';
const LABEL_42114 = 'component_42114';
export function Component42114({ value = 42114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42114, 'data-value': derived.doubled }, children);
}
export default Component42114;
