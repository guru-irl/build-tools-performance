import React from 'react';
const LABEL_22998 = 'component_22998';
export function Component22998({ value = 22998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22998, 'data-value': derived.doubled }, children);
}
export default Component22998;
