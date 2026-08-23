import React from 'react';
const LABEL_43215 = 'component_43215';
export function Component43215({ value = 43215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43215, 'data-value': derived.doubled }, children);
}
export default Component43215;
