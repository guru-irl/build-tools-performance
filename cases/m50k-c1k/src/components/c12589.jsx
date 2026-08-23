import React from 'react';
const LABEL_12589 = 'component_12589';
export function Component12589({ value = 12589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12589, 'data-value': derived.doubled }, children);
}
export default Component12589;
