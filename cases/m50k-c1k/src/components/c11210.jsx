import React from 'react';
const LABEL_11210 = 'component_11210';
export function Component11210({ value = 11210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11210, 'data-value': derived.doubled }, children);
}
export default Component11210;
