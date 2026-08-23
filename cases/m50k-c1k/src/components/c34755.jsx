import React from 'react';
const LABEL_34755 = 'component_34755';
export function Component34755({ value = 34755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34755, 'data-value': derived.doubled }, children);
}
export default Component34755;
