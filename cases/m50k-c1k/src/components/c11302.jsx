import React from 'react';
const LABEL_11302 = 'component_11302';
export function Component11302({ value = 11302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11302, 'data-value': derived.doubled }, children);
}
export default Component11302;
