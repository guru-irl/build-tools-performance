import React from 'react';
const LABEL_24900 = 'component_24900';
export function Component24900({ value = 24900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24900, 'data-value': derived.doubled }, children);
}
export default Component24900;
