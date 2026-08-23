import React from 'react';
const LABEL_10131 = 'component_10131';
export function Component10131({ value = 10131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10131, 'data-value': derived.doubled }, children);
}
export default Component10131;
