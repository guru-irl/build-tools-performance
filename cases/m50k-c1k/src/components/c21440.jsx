import React from 'react';
const LABEL_21440 = 'component_21440';
export function Component21440({ value = 21440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21440, 'data-value': derived.doubled }, children);
}
export default Component21440;
