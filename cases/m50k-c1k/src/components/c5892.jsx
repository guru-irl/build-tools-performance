import React from 'react';
const LABEL_5892 = 'component_5892';
export function Component5892({ value = 5892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5892, 'data-value': derived.doubled }, children);
}
export default Component5892;
