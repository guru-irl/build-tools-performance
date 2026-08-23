import React from 'react';
const LABEL_12071 = 'component_12071';
export function Component12071({ value = 12071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12071, 'data-value': derived.doubled }, children);
}
export default Component12071;
