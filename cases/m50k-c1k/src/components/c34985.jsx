import React from 'react';
const LABEL_34985 = 'component_34985';
export function Component34985({ value = 34985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34985, 'data-value': derived.doubled }, children);
}
export default Component34985;
