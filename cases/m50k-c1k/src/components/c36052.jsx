import React from 'react';
const LABEL_36052 = 'component_36052';
export function Component36052({ value = 36052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36052, 'data-value': derived.doubled }, children);
}
export default Component36052;
