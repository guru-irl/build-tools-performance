import React from 'react';
const LABEL_33013 = 'component_33013';
export function Component33013({ value = 33013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33013, 'data-value': derived.doubled }, children);
}
export default Component33013;
