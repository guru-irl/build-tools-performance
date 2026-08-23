import React from 'react';
const LABEL_10971 = 'component_10971';
export function Component10971({ value = 10971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10971, 'data-value': derived.doubled }, children);
}
export default Component10971;
