import React from 'react';
const LABEL_37549 = 'component_37549';
export function Component37549({ value = 37549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37549, 'data-value': derived.doubled }, children);
}
export default Component37549;
