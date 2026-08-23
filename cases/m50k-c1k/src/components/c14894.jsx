import React from 'react';
const LABEL_14894 = 'component_14894';
export function Component14894({ value = 14894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14894, 'data-value': derived.doubled }, children);
}
export default Component14894;
