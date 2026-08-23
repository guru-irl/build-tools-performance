import React from 'react';
const LABEL_32144 = 'component_32144';
export function Component32144({ value = 32144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32144, 'data-value': derived.doubled }, children);
}
export default Component32144;
