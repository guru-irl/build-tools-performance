import React from 'react';
const LABEL_38135 = 'component_38135';
export function Component38135({ value = 38135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38135, 'data-value': derived.doubled }, children);
}
export default Component38135;
