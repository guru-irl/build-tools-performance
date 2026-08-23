import React from 'react';
const LABEL_8586 = 'component_8586';
export function Component8586({ value = 8586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8586, 'data-value': derived.doubled }, children);
}
export default Component8586;
