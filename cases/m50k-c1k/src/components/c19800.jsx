import React from 'react';
const LABEL_19800 = 'component_19800';
export function Component19800({ value = 19800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19800, 'data-value': derived.doubled }, children);
}
export default Component19800;
