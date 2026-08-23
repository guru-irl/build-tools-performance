import React from 'react';
const LABEL_13065 = 'component_13065';
export function Component13065({ value = 13065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13065, 'data-value': derived.doubled }, children);
}
export default Component13065;
