import React from 'react';
const LABEL_8427 = 'component_8427';
export function Component8427({ value = 8427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8427, 'data-value': derived.doubled }, children);
}
export default Component8427;
