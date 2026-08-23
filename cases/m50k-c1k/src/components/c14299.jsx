import React from 'react';
const LABEL_14299 = 'component_14299';
export function Component14299({ value = 14299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14299, 'data-value': derived.doubled }, children);
}
export default Component14299;
