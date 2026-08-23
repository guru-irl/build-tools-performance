import React from 'react';
const LABEL_37755 = 'component_37755';
export function Component37755({ value = 37755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37755, 'data-value': derived.doubled }, children);
}
export default Component37755;
