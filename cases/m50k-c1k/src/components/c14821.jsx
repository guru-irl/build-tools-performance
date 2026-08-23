import React from 'react';
const LABEL_14821 = 'component_14821';
export function Component14821({ value = 14821, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14821, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14821, 'data-value': derived.doubled }, children);
}
export default Component14821;
