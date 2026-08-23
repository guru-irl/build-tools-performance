import React from 'react';
const LABEL_13958 = 'component_13958';
export function Component13958({ value = 13958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13958, 'data-value': derived.doubled }, children);
}
export default Component13958;
