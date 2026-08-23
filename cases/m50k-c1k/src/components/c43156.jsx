import React from 'react';
const LABEL_43156 = 'component_43156';
export function Component43156({ value = 43156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43156, 'data-value': derived.doubled }, children);
}
export default Component43156;
