import React from 'react';
const LABEL_18136 = 'component_18136';
export function Component18136({ value = 18136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18136, 'data-value': derived.doubled }, children);
}
export default Component18136;
