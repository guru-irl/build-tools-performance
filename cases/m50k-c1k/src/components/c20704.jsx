import React from 'react';
const LABEL_20704 = 'component_20704';
export function Component20704({ value = 20704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20704, 'data-value': derived.doubled }, children);
}
export default Component20704;
