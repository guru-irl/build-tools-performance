import React from 'react';
const LABEL_8078 = 'component_8078';
export function Component8078({ value = 8078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8078, 'data-value': derived.doubled }, children);
}
export default Component8078;
