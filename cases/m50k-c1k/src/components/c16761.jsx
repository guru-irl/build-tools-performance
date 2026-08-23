import React from 'react';
const LABEL_16761 = 'component_16761';
export function Component16761({ value = 16761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16761, 'data-value': derived.doubled }, children);
}
export default Component16761;
