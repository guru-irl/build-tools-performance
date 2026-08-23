import React from 'react';
const LABEL_41646 = 'component_41646';
export function Component41646({ value = 41646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41646, 'data-value': derived.doubled }, children);
}
export default Component41646;
