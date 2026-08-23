import React from 'react';
const LABEL_14946 = 'component_14946';
export function Component14946({ value = 14946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14946, 'data-value': derived.doubled }, children);
}
export default Component14946;
