import React from 'react';
const LABEL_13946 = 'component_13946';
export function Component13946({ value = 13946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13946, 'data-value': derived.doubled }, children);
}
export default Component13946;
