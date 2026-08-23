import React from 'react';
const LABEL_5971 = 'component_5971';
export function Component5971({ value = 5971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5971, 'data-value': derived.doubled }, children);
}
export default Component5971;
