import React from 'react';
const LABEL_19997 = 'component_19997';
export function Component19997({ value = 19997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19997, 'data-value': derived.doubled }, children);
}
export default Component19997;
