import React from 'react';
const LABEL_16080 = 'component_16080';
export function Component16080({ value = 16080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16080, 'data-value': derived.doubled }, children);
}
export default Component16080;
