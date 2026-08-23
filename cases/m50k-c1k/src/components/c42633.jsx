import React from 'react';
const LABEL_42633 = 'component_42633';
export function Component42633({ value = 42633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42633, 'data-value': derived.doubled }, children);
}
export default Component42633;
