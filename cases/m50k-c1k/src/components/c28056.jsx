import React from 'react';
const LABEL_28056 = 'component_28056';
export function Component28056({ value = 28056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28056, 'data-value': derived.doubled }, children);
}
export default Component28056;
