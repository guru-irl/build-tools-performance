import React from 'react';
const LABEL_22956 = 'component_22956';
export function Component22956({ value = 22956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22956, 'data-value': derived.doubled }, children);
}
export default Component22956;
