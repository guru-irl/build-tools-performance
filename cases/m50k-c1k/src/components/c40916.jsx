import React from 'react';
const LABEL_40916 = 'component_40916';
export function Component40916({ value = 40916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40916, 'data-value': derived.doubled }, children);
}
export default Component40916;
