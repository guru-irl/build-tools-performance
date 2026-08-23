import React from 'react';
const LABEL_1887 = 'component_1887';
export function Component1887({ value = 1887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1887, 'data-value': derived.doubled }, children);
}
export default Component1887;
