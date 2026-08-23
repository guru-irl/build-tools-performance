import React from 'react';
const LABEL_1946 = 'component_1946';
export function Component1946({ value = 1946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1946, 'data-value': derived.doubled }, children);
}
export default Component1946;
