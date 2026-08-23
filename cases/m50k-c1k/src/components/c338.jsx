import React from 'react';
const LABEL_338 = 'component_338';
export function Component338({ value = 338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_338, 'data-value': derived.doubled }, children);
}
export default Component338;
