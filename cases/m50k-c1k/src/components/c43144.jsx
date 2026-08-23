import React from 'react';
const LABEL_43144 = 'component_43144';
export function Component43144({ value = 43144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43144, 'data-value': derived.doubled }, children);
}
export default Component43144;
