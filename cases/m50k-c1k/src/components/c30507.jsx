import React from 'react';
const LABEL_30507 = 'component_30507';
export function Component30507({ value = 30507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30507, 'data-value': derived.doubled }, children);
}
export default Component30507;
