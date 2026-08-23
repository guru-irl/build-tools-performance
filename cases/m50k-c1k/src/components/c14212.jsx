import React from 'react';
const LABEL_14212 = 'component_14212';
export function Component14212({ value = 14212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14212, 'data-value': derived.doubled }, children);
}
export default Component14212;
