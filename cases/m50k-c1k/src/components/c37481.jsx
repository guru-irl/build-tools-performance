import React from 'react';
const LABEL_37481 = 'component_37481';
export function Component37481({ value = 37481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37481, 'data-value': derived.doubled }, children);
}
export default Component37481;
