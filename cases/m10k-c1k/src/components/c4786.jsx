import React from 'react';
const LABEL_4786 = 'component_4786';
export function Component4786({ value = 4786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4786, 'data-value': derived.doubled }, children);
}
export default Component4786;
