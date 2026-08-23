import React from 'react';
const LABEL_43210 = 'component_43210';
export function Component43210({ value = 43210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43210, 'data-value': derived.doubled }, children);
}
export default Component43210;
