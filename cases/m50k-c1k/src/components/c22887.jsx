import React from 'react';
const LABEL_22887 = 'component_22887';
export function Component22887({ value = 22887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22887, 'data-value': derived.doubled }, children);
}
export default Component22887;
