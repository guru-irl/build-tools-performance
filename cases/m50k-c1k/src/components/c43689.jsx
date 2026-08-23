import React from 'react';
const LABEL_43689 = 'component_43689';
export function Component43689({ value = 43689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43689, 'data-value': derived.doubled }, children);
}
export default Component43689;
