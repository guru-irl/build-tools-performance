import React from 'react';
const LABEL_36956 = 'component_36956';
export function Component36956({ value = 36956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36956, 'data-value': derived.doubled }, children);
}
export default Component36956;
