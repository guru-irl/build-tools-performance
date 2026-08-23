import React from 'react';
const LABEL_24945 = 'component_24945';
export function Component24945({ value = 24945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24945, 'data-value': derived.doubled }, children);
}
export default Component24945;
