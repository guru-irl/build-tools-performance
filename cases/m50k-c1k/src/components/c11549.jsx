import React from 'react';
const LABEL_11549 = 'component_11549';
export function Component11549({ value = 11549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11549, 'data-value': derived.doubled }, children);
}
export default Component11549;
