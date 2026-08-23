import React from 'react';
const LABEL_22860 = 'component_22860';
export function Component22860({ value = 22860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22860, 'data-value': derived.doubled }, children);
}
export default Component22860;
