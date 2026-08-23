import React from 'react';
const LABEL_26052 = 'component_26052';
export function Component26052({ value = 26052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26052, 'data-value': derived.doubled }, children);
}
export default Component26052;
