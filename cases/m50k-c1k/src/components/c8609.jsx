import React from 'react';
const LABEL_8609 = 'component_8609';
export function Component8609({ value = 8609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8609, 'data-value': derived.doubled }, children);
}
export default Component8609;
