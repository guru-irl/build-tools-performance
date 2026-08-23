import React from 'react';
const LABEL_9866 = 'component_9866';
export function Component9866({ value = 9866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9866, 'data-value': derived.doubled }, children);
}
export default Component9866;
