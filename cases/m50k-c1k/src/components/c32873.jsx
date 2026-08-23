import React from 'react';
const LABEL_32873 = 'component_32873';
export function Component32873({ value = 32873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32873, 'data-value': derived.doubled }, children);
}
export default Component32873;
