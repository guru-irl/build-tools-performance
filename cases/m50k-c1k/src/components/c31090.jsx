import React from 'react';
const LABEL_31090 = 'component_31090';
export function Component31090({ value = 31090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31090, 'data-value': derived.doubled }, children);
}
export default Component31090;
