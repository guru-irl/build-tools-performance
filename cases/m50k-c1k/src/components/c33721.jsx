import React from 'react';
const LABEL_33721 = 'component_33721';
export function Component33721({ value = 33721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33721, 'data-value': derived.doubled }, children);
}
export default Component33721;
