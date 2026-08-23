import React from 'react';
const LABEL_30873 = 'component_30873';
export function Component30873({ value = 30873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30873, 'data-value': derived.doubled }, children);
}
export default Component30873;
