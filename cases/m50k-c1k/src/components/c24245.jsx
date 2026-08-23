import React from 'react';
const LABEL_24245 = 'component_24245';
export function Component24245({ value = 24245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24245, 'data-value': derived.doubled }, children);
}
export default Component24245;
