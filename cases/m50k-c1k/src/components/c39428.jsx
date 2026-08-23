import React from 'react';
const LABEL_39428 = 'component_39428';
export function Component39428({ value = 39428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39428, 'data-value': derived.doubled }, children);
}
export default Component39428;
