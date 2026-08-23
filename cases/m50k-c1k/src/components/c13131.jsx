import React from 'react';
const LABEL_13131 = 'component_13131';
export function Component13131({ value = 13131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13131, 'data-value': derived.doubled }, children);
}
export default Component13131;
