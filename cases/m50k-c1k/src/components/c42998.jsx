import React from 'react';
const LABEL_42998 = 'component_42998';
export function Component42998({ value = 42998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42998, 'data-value': derived.doubled }, children);
}
export default Component42998;
