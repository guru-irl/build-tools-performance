import React from 'react';
const LABEL_16586 = 'component_16586';
export function Component16586({ value = 16586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16586, 'data-value': derived.doubled }, children);
}
export default Component16586;
