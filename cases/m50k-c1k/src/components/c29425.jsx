import React from 'react';
const LABEL_29425 = 'component_29425';
export function Component29425({ value = 29425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29425, 'data-value': derived.doubled }, children);
}
export default Component29425;
