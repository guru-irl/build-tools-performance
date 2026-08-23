import React from 'react';
const LABEL_43668 = 'component_43668';
export function Component43668({ value = 43668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43668, 'data-value': derived.doubled }, children);
}
export default Component43668;
