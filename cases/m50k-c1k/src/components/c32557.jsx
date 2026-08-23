import React from 'react';
const LABEL_32557 = 'component_32557';
export function Component32557({ value = 32557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32557, 'data-value': derived.doubled }, children);
}
export default Component32557;
