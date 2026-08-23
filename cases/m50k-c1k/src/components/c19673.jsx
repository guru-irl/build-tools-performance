import React from 'react';
const LABEL_19673 = 'component_19673';
export function Component19673({ value = 19673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19673, 'data-value': derived.doubled }, children);
}
export default Component19673;
