import React from 'react';
const LABEL_13583 = 'component_13583';
export function Component13583({ value = 13583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13583, 'data-value': derived.doubled }, children);
}
export default Component13583;
