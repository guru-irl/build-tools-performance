import React from 'react';
const LABEL_24385 = 'component_24385';
export function Component24385({ value = 24385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24385, 'data-value': derived.doubled }, children);
}
export default Component24385;
