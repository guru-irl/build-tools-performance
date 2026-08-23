import React from 'react';
const LABEL_19099 = 'component_19099';
export function Component19099({ value = 19099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19099, 'data-value': derived.doubled }, children);
}
export default Component19099;
