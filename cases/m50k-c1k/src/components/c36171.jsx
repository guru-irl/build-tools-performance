import React from 'react';
const LABEL_36171 = 'component_36171';
export function Component36171({ value = 36171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36171, 'data-value': derived.doubled }, children);
}
export default Component36171;
