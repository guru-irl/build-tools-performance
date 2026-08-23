import React from 'react';
const LABEL_13867 = 'component_13867';
export function Component13867({ value = 13867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13867, 'data-value': derived.doubled }, children);
}
export default Component13867;
