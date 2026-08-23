import React from 'react';
const LABEL_8867 = 'component_8867';
export function Component8867({ value = 8867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8867, 'data-value': derived.doubled }, children);
}
export default Component8867;
