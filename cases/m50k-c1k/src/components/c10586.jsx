import React from 'react';
const LABEL_10586 = 'component_10586';
export function Component10586({ value = 10586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10586, 'data-value': derived.doubled }, children);
}
export default Component10586;
