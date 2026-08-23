import React from 'react';
const LABEL_37335 = 'component_37335';
export function Component37335({ value = 37335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37335, 'data-value': derived.doubled }, children);
}
export default Component37335;
