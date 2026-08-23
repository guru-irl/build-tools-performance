import React from 'react';
const LABEL_24335 = 'component_24335';
export function Component24335({ value = 24335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24335, 'data-value': derived.doubled }, children);
}
export default Component24335;
