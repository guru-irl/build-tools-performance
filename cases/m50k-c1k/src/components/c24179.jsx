import React from 'react';
const LABEL_24179 = 'component_24179';
export function Component24179({ value = 24179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24179, 'data-value': derived.doubled }, children);
}
export default Component24179;
