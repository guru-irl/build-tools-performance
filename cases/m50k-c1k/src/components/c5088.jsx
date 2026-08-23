import React from 'react';
const LABEL_5088 = 'component_5088';
export function Component5088({ value = 5088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5088, 'data-value': derived.doubled }, children);
}
export default Component5088;
