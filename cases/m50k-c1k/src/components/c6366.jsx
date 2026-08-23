import React from 'react';
const LABEL_6366 = 'component_6366';
export function Component6366({ value = 6366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6366, 'data-value': derived.doubled }, children);
}
export default Component6366;
