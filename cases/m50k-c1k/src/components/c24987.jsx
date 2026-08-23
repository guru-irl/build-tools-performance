import React from 'react';
const LABEL_24987 = 'component_24987';
export function Component24987({ value = 24987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24987, 'data-value': derived.doubled }, children);
}
export default Component24987;
