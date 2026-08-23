import React from 'react';
const LABEL_10788 = 'component_10788';
export function Component10788({ value = 10788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10788, 'data-value': derived.doubled }, children);
}
export default Component10788;
