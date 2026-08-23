import React from 'react';
const LABEL_14964 = 'component_14964';
export function Component14964({ value = 14964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14964, 'data-value': derived.doubled }, children);
}
export default Component14964;
