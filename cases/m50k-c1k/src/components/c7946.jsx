import React from 'react';
const LABEL_7946 = 'component_7946';
export function Component7946({ value = 7946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7946, 'data-value': derived.doubled }, children);
}
export default Component7946;
