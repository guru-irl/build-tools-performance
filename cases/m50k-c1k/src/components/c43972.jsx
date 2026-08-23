import React from 'react';
const LABEL_43972 = 'component_43972';
export function Component43972({ value = 43972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43972, 'data-value': derived.doubled }, children);
}
export default Component43972;
