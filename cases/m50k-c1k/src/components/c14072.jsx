import React from 'react';
const LABEL_14072 = 'component_14072';
export function Component14072({ value = 14072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14072, 'data-value': derived.doubled }, children);
}
export default Component14072;
