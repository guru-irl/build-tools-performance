import React from 'react';
const LABEL_34035 = 'component_34035';
export function Component34035({ value = 34035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34035, 'data-value': derived.doubled }, children);
}
export default Component34035;
