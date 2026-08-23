import React from 'react';
const LABEL_42867 = 'component_42867';
export function Component42867({ value = 42867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42867, 'data-value': derived.doubled }, children);
}
export default Component42867;
