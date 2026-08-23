import React from 'react';
const LABEL_37589 = 'component_37589';
export function Component37589({ value = 37589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37589, 'data-value': derived.doubled }, children);
}
export default Component37589;
