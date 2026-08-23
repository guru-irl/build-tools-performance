import React from 'react';
const LABEL_8581 = 'component_8581';
export function Component8581({ value = 8581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8581, 'data-value': derived.doubled }, children);
}
export default Component8581;
