import React from 'react';
const LABEL_29991 = 'component_29991';
export function Component29991({ value = 29991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29991, 'data-value': derived.doubled }, children);
}
export default Component29991;
