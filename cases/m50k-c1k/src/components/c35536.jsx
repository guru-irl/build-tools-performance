import React from 'react';
const LABEL_35536 = 'component_35536';
export function Component35536({ value = 35536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35536, 'data-value': derived.doubled }, children);
}
export default Component35536;
