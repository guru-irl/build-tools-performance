import React from 'react';
const LABEL_10061 = 'component_10061';
export function Component10061({ value = 10061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10061, 'data-value': derived.doubled }, children);
}
export default Component10061;
