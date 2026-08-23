import React from 'react';
const LABEL_38414 = 'component_38414';
export function Component38414({ value = 38414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38414, 'data-value': derived.doubled }, children);
}
export default Component38414;
