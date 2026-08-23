import React from 'react';
const LABEL_42136 = 'component_42136';
export function Component42136({ value = 42136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42136, 'data-value': derived.doubled }, children);
}
export default Component42136;
