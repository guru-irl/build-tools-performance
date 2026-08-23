import React from 'react';
const LABEL_43183 = 'component_43183';
export function Component43183({ value = 43183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43183, 'data-value': derived.doubled }, children);
}
export default Component43183;
