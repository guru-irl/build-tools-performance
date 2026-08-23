import React from 'react';
const LABEL_40042 = 'component_40042';
export function Component40042({ value = 40042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40042, 'data-value': derived.doubled }, children);
}
export default Component40042;
