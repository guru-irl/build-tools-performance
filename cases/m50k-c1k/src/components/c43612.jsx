import React from 'react';
const LABEL_43612 = 'component_43612';
export function Component43612({ value = 43612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43612, 'data-value': derived.doubled }, children);
}
export default Component43612;
