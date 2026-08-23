import React from 'react';
const LABEL_4409 = 'component_4409';
export function Component4409({ value = 4409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4409, 'data-value': derived.doubled }, children);
}
export default Component4409;
