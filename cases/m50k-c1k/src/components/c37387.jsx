import React from 'react';
const LABEL_37387 = 'component_37387';
export function Component37387({ value = 37387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37387, 'data-value': derived.doubled }, children);
}
export default Component37387;
