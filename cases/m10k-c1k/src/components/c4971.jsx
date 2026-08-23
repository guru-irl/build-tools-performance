import React from 'react';
const LABEL_4971 = 'component_4971';
export function Component4971({ value = 4971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4971, 'data-value': derived.doubled }, children);
}
export default Component4971;
