import React from 'react';
const LABEL_35946 = 'component_35946';
export function Component35946({ value = 35946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35946, 'data-value': derived.doubled }, children);
}
export default Component35946;
