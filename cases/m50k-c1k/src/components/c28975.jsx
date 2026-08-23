import React from 'react';
const LABEL_28975 = 'component_28975';
export function Component28975({ value = 28975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28975, 'data-value': derived.doubled }, children);
}
export default Component28975;
