import React from 'react';
const LABEL_14549 = 'component_14549';
export function Component14549({ value = 14549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14549, 'data-value': derived.doubled }, children);
}
export default Component14549;
