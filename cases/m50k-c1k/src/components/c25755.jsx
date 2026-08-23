import React from 'react';
const LABEL_25755 = 'component_25755';
export function Component25755({ value = 25755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25755, 'data-value': derived.doubled }, children);
}
export default Component25755;
