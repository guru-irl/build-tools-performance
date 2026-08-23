import React from 'react';
const LABEL_43137 = 'component_43137';
export function Component43137({ value = 43137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43137, 'data-value': derived.doubled }, children);
}
export default Component43137;
