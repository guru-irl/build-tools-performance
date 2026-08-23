import React from 'react';
const LABEL_24455 = 'component_24455';
export function Component24455({ value = 24455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24455, 'data-value': derived.doubled }, children);
}
export default Component24455;
