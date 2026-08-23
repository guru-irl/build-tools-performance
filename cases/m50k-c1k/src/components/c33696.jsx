import React from 'react';
const LABEL_33696 = 'component_33696';
export function Component33696({ value = 33696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33696, 'data-value': derived.doubled }, children);
}
export default Component33696;
