import React from 'react';
const LABEL_20676 = 'component_20676';
export function Component20676({ value = 20676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20676, 'data-value': derived.doubled }, children);
}
export default Component20676;
