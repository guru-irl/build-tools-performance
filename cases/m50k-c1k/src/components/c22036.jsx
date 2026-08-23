import React from 'react';
const LABEL_22036 = 'component_22036';
export function Component22036({ value = 22036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22036, 'data-value': derived.doubled }, children);
}
export default Component22036;
