import React from 'react';
const LABEL_32586 = 'component_32586';
export function Component32586({ value = 32586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32586, 'data-value': derived.doubled }, children);
}
export default Component32586;
