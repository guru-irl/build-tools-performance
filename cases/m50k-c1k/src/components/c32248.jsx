import React from 'react';
const LABEL_32248 = 'component_32248';
export function Component32248({ value = 32248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32248, 'data-value': derived.doubled }, children);
}
export default Component32248;
