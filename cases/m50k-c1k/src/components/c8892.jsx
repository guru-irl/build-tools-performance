import React from 'react';
const LABEL_8892 = 'component_8892';
export function Component8892({ value = 8892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8892, 'data-value': derived.doubled }, children);
}
export default Component8892;
