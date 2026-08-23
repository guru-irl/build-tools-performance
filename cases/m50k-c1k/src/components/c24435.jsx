import React from 'react';
const LABEL_24435 = 'component_24435';
export function Component24435({ value = 24435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24435, 'data-value': derived.doubled }, children);
}
export default Component24435;
