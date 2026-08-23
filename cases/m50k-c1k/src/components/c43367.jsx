import React from 'react';
const LABEL_43367 = 'component_43367';
export function Component43367({ value = 43367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43367, 'data-value': derived.doubled }, children);
}
export default Component43367;
