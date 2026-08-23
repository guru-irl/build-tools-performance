import React from 'react';
const LABEL_14869 = 'component_14869';
export function Component14869({ value = 14869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14869, 'data-value': derived.doubled }, children);
}
export default Component14869;
