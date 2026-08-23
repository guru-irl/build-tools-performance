import React from 'react';
const LABEL_40052 = 'component_40052';
export function Component40052({ value = 40052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40052, 'data-value': derived.doubled }, children);
}
export default Component40052;
