import React from 'react';
const LABEL_14052 = 'component_14052';
export function Component14052({ value = 14052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14052, 'data-value': derived.doubled }, children);
}
export default Component14052;
