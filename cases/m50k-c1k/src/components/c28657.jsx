import React from 'react';
const LABEL_28657 = 'component_28657';
export function Component28657({ value = 28657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28657, 'data-value': derived.doubled }, children);
}
export default Component28657;
