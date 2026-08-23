import React from 'react';
const LABEL_36549 = 'component_36549';
export function Component36549({ value = 36549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36549, 'data-value': derived.doubled }, children);
}
export default Component36549;
