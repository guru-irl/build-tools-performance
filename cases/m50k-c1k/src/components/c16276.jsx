import React from 'react';
const LABEL_16276 = 'component_16276';
export function Component16276({ value = 16276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16276, 'data-value': derived.doubled }, children);
}
export default Component16276;
