import React from 'react';
const LABEL_3194 = 'component_3194';
export function Component3194({ value = 3194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3194, 'data-value': derived.doubled }, children);
}
export default Component3194;
