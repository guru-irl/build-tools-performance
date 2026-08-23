import React from 'react';
const LABEL_13549 = 'component_13549';
export function Component13549({ value = 13549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13549, 'data-value': derived.doubled }, children);
}
export default Component13549;
