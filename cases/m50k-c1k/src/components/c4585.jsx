import React from 'react';
const LABEL_4585 = 'component_4585';
export function Component4585({ value = 4585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4585, 'data-value': derived.doubled }, children);
}
export default Component4585;
