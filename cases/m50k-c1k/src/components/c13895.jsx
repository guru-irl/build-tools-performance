import React from 'react';
const LABEL_13895 = 'component_13895';
export function Component13895({ value = 13895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13895, 'data-value': derived.doubled }, children);
}
export default Component13895;
