import React from 'react';
const LABEL_2586 = 'component_2586';
export function Component2586({ value = 2586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2586, 'data-value': derived.doubled }, children);
}
export default Component2586;
