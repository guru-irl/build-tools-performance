import React from 'react';
const LABEL_4657 = 'component_4657';
export function Component4657({ value = 4657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4657, 'data-value': derived.doubled }, children);
}
export default Component4657;
