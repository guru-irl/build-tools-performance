import React from 'react';
const LABEL_32414 = 'component_32414';
export function Component32414({ value = 32414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32414, 'data-value': derived.doubled }, children);
}
export default Component32414;
