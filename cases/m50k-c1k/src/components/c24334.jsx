import React from 'react';
const LABEL_24334 = 'component_24334';
export function Component24334({ value = 24334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24334, 'data-value': derived.doubled }, children);
}
export default Component24334;
