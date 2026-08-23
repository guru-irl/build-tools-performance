import React from 'react';
const LABEL_7317 = 'component_7317';
export function Component7317({ value = 7317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7317, 'data-value': derived.doubled }, children);
}
export default Component7317;
