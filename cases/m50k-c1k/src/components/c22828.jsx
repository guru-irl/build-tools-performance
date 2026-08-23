import React from 'react';
const LABEL_22828 = 'component_22828';
export function Component22828({ value = 22828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22828, 'data-value': derived.doubled }, children);
}
export default Component22828;
