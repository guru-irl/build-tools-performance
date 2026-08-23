import React from 'react';
const LABEL_38644 = 'component_38644';
export function Component38644({ value = 38644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38644, 'data-value': derived.doubled }, children);
}
export default Component38644;
