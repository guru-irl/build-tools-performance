import React from 'react';
const LABEL_19076 = 'component_19076';
export function Component19076({ value = 19076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19076, 'data-value': derived.doubled }, children);
}
export default Component19076;
