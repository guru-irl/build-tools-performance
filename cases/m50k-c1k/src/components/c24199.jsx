import React from 'react';
const LABEL_24199 = 'component_24199';
export function Component24199({ value = 24199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24199, 'data-value': derived.doubled }, children);
}
export default Component24199;
