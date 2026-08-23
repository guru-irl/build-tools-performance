import React from 'react';
const LABEL_34306 = 'component_34306';
export function Component34306({ value = 34306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34306, 'data-value': derived.doubled }, children);
}
export default Component34306;
