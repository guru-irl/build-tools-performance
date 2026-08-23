import React from 'react';
const LABEL_7549 = 'component_7549';
export function Component7549({ value = 7549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7549, 'data-value': derived.doubled }, children);
}
export default Component7549;
