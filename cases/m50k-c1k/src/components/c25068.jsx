import React from 'react';
const LABEL_25068 = 'component_25068';
export function Component25068({ value = 25068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25068, 'data-value': derived.doubled }, children);
}
export default Component25068;
