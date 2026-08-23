import React from 'react';
const LABEL_22082 = 'component_22082';
export function Component22082({ value = 22082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22082, 'data-value': derived.doubled }, children);
}
export default Component22082;
