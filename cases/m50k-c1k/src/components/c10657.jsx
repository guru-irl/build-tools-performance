import React from 'react';
const LABEL_10657 = 'component_10657';
export function Component10657({ value = 10657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10657, 'data-value': derived.doubled }, children);
}
export default Component10657;
