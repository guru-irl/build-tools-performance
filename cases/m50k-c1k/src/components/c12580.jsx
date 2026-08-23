import React from 'react';
const LABEL_12580 = 'component_12580';
export function Component12580({ value = 12580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12580, 'data-value': derived.doubled }, children);
}
export default Component12580;
