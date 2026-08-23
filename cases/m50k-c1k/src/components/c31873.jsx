import React from 'react';
const LABEL_31873 = 'component_31873';
export function Component31873({ value = 31873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31873, 'data-value': derived.doubled }, children);
}
export default Component31873;
