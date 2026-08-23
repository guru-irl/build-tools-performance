import React from 'react';
const LABEL_41971 = 'component_41971';
export function Component41971({ value = 41971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41971, 'data-value': derived.doubled }, children);
}
export default Component41971;
