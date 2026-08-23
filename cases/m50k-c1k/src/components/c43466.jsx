import React from 'react';
const LABEL_43466 = 'component_43466';
export function Component43466({ value = 43466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43466, 'data-value': derived.doubled }, children);
}
export default Component43466;
