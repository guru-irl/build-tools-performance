import React from 'react';
const LABEL_1958 = 'component_1958';
export function Component1958({ value = 1958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1958, 'data-value': derived.doubled }, children);
}
export default Component1958;
