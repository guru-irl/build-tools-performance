import React from 'react';
const LABEL_11335 = 'component_11335';
export function Component11335({ value = 11335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11335, 'data-value': derived.doubled }, children);
}
export default Component11335;
