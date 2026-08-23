import React from 'react';
const LABEL_32082 = 'component_32082';
export function Component32082({ value = 32082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32082, 'data-value': derived.doubled }, children);
}
export default Component32082;
