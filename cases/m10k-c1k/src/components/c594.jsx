import React from 'react';
const LABEL_594 = 'component_594';
export function Component594({ value = 594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_594, 'data-value': derived.doubled }, children);
}
export default Component594;
