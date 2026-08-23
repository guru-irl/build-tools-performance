import React from 'react';
const LABEL_13235 = 'component_13235';
export function Component13235({ value = 13235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13235, 'data-value': derived.doubled }, children);
}
export default Component13235;
