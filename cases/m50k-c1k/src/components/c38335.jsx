import React from 'react';
const LABEL_38335 = 'component_38335';
export function Component38335({ value = 38335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38335, 'data-value': derived.doubled }, children);
}
export default Component38335;
