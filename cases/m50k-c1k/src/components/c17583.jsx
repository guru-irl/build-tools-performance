import React from 'react';
const LABEL_17583 = 'component_17583';
export function Component17583({ value = 17583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17583, 'data-value': derived.doubled }, children);
}
export default Component17583;
