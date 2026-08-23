import React from 'react';
const LABEL_25549 = 'component_25549';
export function Component25549({ value = 25549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25549, 'data-value': derived.doubled }, children);
}
export default Component25549;
