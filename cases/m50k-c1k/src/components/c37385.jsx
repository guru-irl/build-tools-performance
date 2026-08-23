import React from 'react';
const LABEL_37385 = 'component_37385';
export function Component37385({ value = 37385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37385, 'data-value': derived.doubled }, children);
}
export default Component37385;
