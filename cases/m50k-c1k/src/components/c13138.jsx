import React from 'react';
const LABEL_13138 = 'component_13138';
export function Component13138({ value = 13138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13138, 'data-value': derived.doubled }, children);
}
export default Component13138;
