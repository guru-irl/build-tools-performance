import React from 'react';
const LABEL_43498 = 'component_43498';
export function Component43498({ value = 43498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43498, 'data-value': derived.doubled }, children);
}
export default Component43498;
