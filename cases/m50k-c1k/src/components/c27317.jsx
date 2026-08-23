import React from 'react';
const LABEL_27317 = 'component_27317';
export function Component27317({ value = 27317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27317, 'data-value': derived.doubled }, children);
}
export default Component27317;
