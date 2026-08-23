import React from 'react';
const LABEL_34833 = 'component_34833';
export function Component34833({ value = 34833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34833, 'data-value': derived.doubled }, children);
}
export default Component34833;
