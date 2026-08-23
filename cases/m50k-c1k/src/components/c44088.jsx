import React from 'react';
const LABEL_44088 = 'component_44088';
export function Component44088({ value = 44088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44088, 'data-value': derived.doubled }, children);
}
export default Component44088;
