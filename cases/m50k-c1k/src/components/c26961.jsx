import React from 'react';
const LABEL_26961 = 'component_26961';
export function Component26961({ value = 26961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26961, 'data-value': derived.doubled }, children);
}
export default Component26961;
