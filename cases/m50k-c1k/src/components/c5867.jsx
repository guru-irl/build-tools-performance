import React from 'react';
const LABEL_5867 = 'component_5867';
export function Component5867({ value = 5867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5867, 'data-value': derived.doubled }, children);
}
export default Component5867;
