import React from 'react';
const LABEL_46860 = 'component_46860';
export function Component46860({ value = 46860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46860, 'data-value': derived.doubled }, children);
}
export default Component46860;
