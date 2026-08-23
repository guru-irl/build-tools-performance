import React from 'react';
const LABEL_4136 = 'component_4136';
export function Component4136({ value = 4136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4136, 'data-value': derived.doubled }, children);
}
export default Component4136;
