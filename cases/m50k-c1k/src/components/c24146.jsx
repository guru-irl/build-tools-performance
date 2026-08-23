import React from 'react';
const LABEL_24146 = 'component_24146';
export function Component24146({ value = 24146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24146, 'data-value': derived.doubled }, children);
}
export default Component24146;
