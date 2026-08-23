import React from 'react';
const LABEL_38210 = 'component_38210';
export function Component38210({ value = 38210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38210, 'data-value': derived.doubled }, children);
}
export default Component38210;
