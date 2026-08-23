import React from 'react';
const LABEL_38230 = 'component_38230';
export function Component38230({ value = 38230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38230, 'data-value': derived.doubled }, children);
}
export default Component38230;
