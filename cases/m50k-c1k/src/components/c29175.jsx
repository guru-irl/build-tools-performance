import React from 'react';
const LABEL_29175 = 'component_29175';
export function Component29175({ value = 29175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29175, 'data-value': derived.doubled }, children);
}
export default Component29175;
