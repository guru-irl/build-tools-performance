import React from 'react';
const LABEL_46358 = 'component_46358';
export function Component46358({ value = 46358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46358, 'data-value': derived.doubled }, children);
}
export default Component46358;
