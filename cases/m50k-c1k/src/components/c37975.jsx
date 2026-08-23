import React from 'react';
const LABEL_37975 = 'component_37975';
export function Component37975({ value = 37975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37975, 'data-value': derived.doubled }, children);
}
export default Component37975;
