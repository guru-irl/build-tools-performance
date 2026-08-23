import React from 'react';
const LABEL_31088 = 'component_31088';
export function Component31088({ value = 31088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31088, 'data-value': derived.doubled }, children);
}
export default Component31088;
