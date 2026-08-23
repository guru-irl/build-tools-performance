import React from 'react';
const LABEL_14958 = 'component_14958';
export function Component14958({ value = 14958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14958, 'data-value': derived.doubled }, children);
}
export default Component14958;
