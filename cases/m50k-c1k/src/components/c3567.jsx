import React from 'react';
const LABEL_3567 = 'component_3567';
export function Component3567({ value = 3567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3567, 'data-value': derived.doubled }, children);
}
export default Component3567;
