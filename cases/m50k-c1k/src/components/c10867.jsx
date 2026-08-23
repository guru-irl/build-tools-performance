import React from 'react';
const LABEL_10867 = 'component_10867';
export function Component10867({ value = 10867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10867, 'data-value': derived.doubled }, children);
}
export default Component10867;
