import React from 'react';
const LABEL_11763 = 'component_11763';
export function Component11763({ value = 11763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11763, 'data-value': derived.doubled }, children);
}
export default Component11763;
