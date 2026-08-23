import React from 'react';
const LABEL_18440 = 'component_18440';
export function Component18440({ value = 18440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18440, 'data-value': derived.doubled }, children);
}
export default Component18440;
