import React from 'react';
const LABEL_13978 = 'component_13978';
export function Component13978({ value = 13978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13978, 'data-value': derived.doubled }, children);
}
export default Component13978;
