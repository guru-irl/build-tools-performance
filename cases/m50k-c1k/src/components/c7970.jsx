import React from 'react';
const LABEL_7970 = 'component_7970';
export function Component7970({ value = 7970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7970, 'data-value': derived.doubled }, children);
}
export default Component7970;
