import React from 'react';
const LABEL_11912 = 'component_11912';
export function Component11912({ value = 11912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11912, 'data-value': derived.doubled }, children);
}
export default Component11912;
