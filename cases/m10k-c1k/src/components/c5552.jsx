import React from 'react';
const LABEL_5552 = 'component_5552';
export function Component5552({ value = 5552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5552, 'data-value': derived.doubled }, children);
}
export default Component5552;
