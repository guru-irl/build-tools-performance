import React from 'react';
const LABEL_13544 = 'component_13544';
export function Component13544({ value = 13544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13544, 'data-value': derived.doubled }, children);
}
export default Component13544;
