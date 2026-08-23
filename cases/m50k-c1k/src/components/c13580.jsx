import React from 'react';
const LABEL_13580 = 'component_13580';
export function Component13580({ value = 13580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13580, 'data-value': derived.doubled }, children);
}
export default Component13580;
