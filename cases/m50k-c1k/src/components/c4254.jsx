import React from 'react';
const LABEL_4254 = 'component_4254';
export function Component4254({ value = 4254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4254, 'data-value': derived.doubled }, children);
}
export default Component4254;
