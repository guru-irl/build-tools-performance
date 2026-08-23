import React from 'react';
const LABEL_3873 = 'component_3873';
export function Component3873({ value = 3873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3873, 'data-value': derived.doubled }, children);
}
export default Component3873;
