import React from 'react';
const LABEL_12114 = 'component_12114';
export function Component12114({ value = 12114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12114, 'data-value': derived.doubled }, children);
}
export default Component12114;
