import React from 'react';
const LABEL_43003 = 'component_43003';
export function Component43003({ value = 43003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43003, 'data-value': derived.doubled }, children);
}
export default Component43003;
