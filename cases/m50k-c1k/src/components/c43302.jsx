import React from 'react';
const LABEL_43302 = 'component_43302';
export function Component43302({ value = 43302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43302, 'data-value': derived.doubled }, children);
}
export default Component43302;
