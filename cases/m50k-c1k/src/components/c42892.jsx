import React from 'react';
const LABEL_42892 = 'component_42892';
export function Component42892({ value = 42892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42892, 'data-value': derived.doubled }, children);
}
export default Component42892;
