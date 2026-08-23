import React from 'react';
const LABEL_19114 = 'component_19114';
export function Component19114({ value = 19114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19114, 'data-value': derived.doubled }, children);
}
export default Component19114;
