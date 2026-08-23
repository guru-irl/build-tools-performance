import React from 'react';
const LABEL_24077 = 'component_24077';
export function Component24077({ value = 24077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24077, 'data-value': derived.doubled }, children);
}
export default Component24077;
