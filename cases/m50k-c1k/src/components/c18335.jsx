import React from 'react';
const LABEL_18335 = 'component_18335';
export function Component18335({ value = 18335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18335, 'data-value': derived.doubled }, children);
}
export default Component18335;
