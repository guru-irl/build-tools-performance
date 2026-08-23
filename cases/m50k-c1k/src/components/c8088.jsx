import React from 'react';
const LABEL_8088 = 'component_8088';
export function Component8088({ value = 8088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8088, 'data-value': derived.doubled }, children);
}
export default Component8088;
