import React from 'react';
const LABEL_34162 = 'component_34162';
export function Component34162({ value = 34162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34162, 'data-value': derived.doubled }, children);
}
export default Component34162;
