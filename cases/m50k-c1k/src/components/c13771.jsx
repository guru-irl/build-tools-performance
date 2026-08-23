import React from 'react';
const LABEL_13771 = 'component_13771';
export function Component13771({ value = 13771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13771, 'data-value': derived.doubled }, children);
}
export default Component13771;
