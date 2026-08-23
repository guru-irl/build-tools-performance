import React from 'react';
const LABEL_31958 = 'component_31958';
export function Component31958({ value = 31958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31958, 'data-value': derived.doubled }, children);
}
export default Component31958;
