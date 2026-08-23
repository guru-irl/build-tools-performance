import React from 'react';
const LABEL_43518 = 'component_43518';
export function Component43518({ value = 43518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43518, 'data-value': derived.doubled }, children);
}
export default Component43518;
