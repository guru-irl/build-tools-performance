import React from 'react';
const LABEL_25239 = 'component_25239';
export function Component25239({ value = 25239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25239, 'data-value': derived.doubled }, children);
}
export default Component25239;
