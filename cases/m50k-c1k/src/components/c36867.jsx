import React from 'react';
const LABEL_36867 = 'component_36867';
export function Component36867({ value = 36867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36867, 'data-value': derived.doubled }, children);
}
export default Component36867;
