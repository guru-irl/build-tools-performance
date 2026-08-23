import React from 'react';
const LABEL_40751 = 'component_40751';
export function Component40751({ value = 40751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40751, 'data-value': derived.doubled }, children);
}
export default Component40751;
