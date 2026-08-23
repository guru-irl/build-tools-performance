import React from 'react';
const LABEL_19945 = 'component_19945';
export function Component19945({ value = 19945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19945, 'data-value': derived.doubled }, children);
}
export default Component19945;
