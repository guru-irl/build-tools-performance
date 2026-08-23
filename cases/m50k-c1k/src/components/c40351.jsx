import React from 'react';
const LABEL_40351 = 'component_40351';
export function Component40351({ value = 40351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40351, 'data-value': derived.doubled }, children);
}
export default Component40351;
