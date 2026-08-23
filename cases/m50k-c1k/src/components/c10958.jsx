import React from 'react';
const LABEL_10958 = 'component_10958';
export function Component10958({ value = 10958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10958, 'data-value': derived.doubled }, children);
}
export default Component10958;
