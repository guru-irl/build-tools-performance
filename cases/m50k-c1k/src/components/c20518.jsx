import React from 'react';
const LABEL_20518 = 'component_20518';
export function Component20518({ value = 20518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20518, 'data-value': derived.doubled }, children);
}
export default Component20518;
