import React from 'react';
const LABEL_8958 = 'component_8958';
export function Component8958({ value = 8958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8958, 'data-value': derived.doubled }, children);
}
export default Component8958;
