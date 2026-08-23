import React from 'react';
const LABEL_29586 = 'component_29586';
export function Component29586({ value = 29586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29586, 'data-value': derived.doubled }, children);
}
export default Component29586;
