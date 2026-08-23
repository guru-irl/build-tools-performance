import React from 'react';
const LABEL_11821 = 'component_11821';
export function Component11821({ value = 11821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11821, 'data-value': derived.doubled }, children);
}
export default Component11821;
