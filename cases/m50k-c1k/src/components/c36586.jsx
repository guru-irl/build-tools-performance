import React from 'react';
const LABEL_36586 = 'component_36586';
export function Component36586({ value = 36586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36586, 'data-value': derived.doubled }, children);
}
export default Component36586;
