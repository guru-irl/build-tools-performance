import React from 'react';
const LABEL_23166 = 'component_23166';
export function Component23166({ value = 23166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23166, 'data-value': derived.doubled }, children);
}
export default Component23166;
