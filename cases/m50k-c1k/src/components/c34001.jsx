import React from 'react';
const LABEL_34001 = 'component_34001';
export function Component34001({ value = 34001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34001, 'data-value': derived.doubled }, children);
}
export default Component34001;
