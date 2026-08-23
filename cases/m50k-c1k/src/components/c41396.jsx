import React from 'react';
const LABEL_41396 = 'component_41396';
export function Component41396({ value = 41396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41396, 'data-value': derived.doubled }, children);
}
export default Component41396;
