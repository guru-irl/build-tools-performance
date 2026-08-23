import React from 'react';
const LABEL_36424 = 'component_36424';
export function Component36424({ value = 36424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36424, 'data-value': derived.doubled }, children);
}
export default Component36424;
