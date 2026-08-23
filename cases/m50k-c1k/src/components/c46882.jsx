import React from 'react';
const LABEL_46882 = 'component_46882';
export function Component46882({ value = 46882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46882, 'data-value': derived.doubled }, children);
}
export default Component46882;
