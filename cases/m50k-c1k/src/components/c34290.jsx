import React from 'react';
const LABEL_34290 = 'component_34290';
export function Component34290({ value = 34290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34290, 'data-value': derived.doubled }, children);
}
export default Component34290;
