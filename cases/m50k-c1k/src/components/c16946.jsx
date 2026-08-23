import React from 'react';
const LABEL_16946 = 'component_16946';
export function Component16946({ value = 16946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16946, 'data-value': derived.doubled }, children);
}
export default Component16946;
