import React from 'react';
const LABEL_13974 = 'component_13974';
export function Component13974({ value = 13974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13974, 'data-value': derived.doubled }, children);
}
export default Component13974;
