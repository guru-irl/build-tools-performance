import React from 'react';
const LABEL_16036 = 'component_16036';
export function Component16036({ value = 16036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16036, 'data-value': derived.doubled }, children);
}
export default Component16036;
