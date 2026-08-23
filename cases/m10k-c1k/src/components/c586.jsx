import React from 'react';
const LABEL_586 = 'component_586';
export function Component586({ value = 586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_586, 'data-value': derived.doubled }, children);
}
export default Component586;
