import React from 'react';
const LABEL_38589 = 'component_38589';
export function Component38589({ value = 38589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38589, 'data-value': derived.doubled }, children);
}
export default Component38589;
