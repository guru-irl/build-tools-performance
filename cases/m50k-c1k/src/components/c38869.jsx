import React from 'react';
const LABEL_38869 = 'component_38869';
export function Component38869({ value = 38869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38869, 'data-value': derived.doubled }, children);
}
export default Component38869;
