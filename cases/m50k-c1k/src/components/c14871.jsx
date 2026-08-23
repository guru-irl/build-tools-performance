import React from 'react';
const LABEL_14871 = 'component_14871';
export function Component14871({ value = 14871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14871, 'data-value': derived.doubled }, children);
}
export default Component14871;
