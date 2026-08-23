import React from 'react';
const LABEL_11586 = 'component_11586';
export function Component11586({ value = 11586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11586, 'data-value': derived.doubled }, children);
}
export default Component11586;
