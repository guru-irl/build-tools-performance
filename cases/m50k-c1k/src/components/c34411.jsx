import React from 'react';
const LABEL_34411 = 'component_34411';
export function Component34411({ value = 34411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34411, 'data-value': derived.doubled }, children);
}
export default Component34411;
