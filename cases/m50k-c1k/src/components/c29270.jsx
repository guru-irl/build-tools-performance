import React from 'react';
const LABEL_29270 = 'component_29270';
export function Component29270({ value = 29270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29270, 'data-value': derived.doubled }, children);
}
export default Component29270;
