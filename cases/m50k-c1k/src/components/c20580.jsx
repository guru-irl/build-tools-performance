import React from 'react';
const LABEL_20580 = 'component_20580';
export function Component20580({ value = 20580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20580, 'data-value': derived.doubled }, children);
}
export default Component20580;
