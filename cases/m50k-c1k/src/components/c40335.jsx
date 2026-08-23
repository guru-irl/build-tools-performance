import React from 'react';
const LABEL_40335 = 'component_40335';
export function Component40335({ value = 40335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40335, 'data-value': derived.doubled }, children);
}
export default Component40335;
