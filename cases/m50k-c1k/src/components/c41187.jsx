import React from 'react';
const LABEL_41187 = 'component_41187';
export function Component41187({ value = 41187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41187, 'data-value': derived.doubled }, children);
}
export default Component41187;
