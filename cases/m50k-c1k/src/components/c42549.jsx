import React from 'react';
const LABEL_42549 = 'component_42549';
export function Component42549({ value = 42549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42549, 'data-value': derived.doubled }, children);
}
export default Component42549;
