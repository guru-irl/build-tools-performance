import React from 'react';
const LABEL_38076 = 'component_38076';
export function Component38076({ value = 38076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38076, 'data-value': derived.doubled }, children);
}
export default Component38076;
