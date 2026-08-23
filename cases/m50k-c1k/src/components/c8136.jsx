import React from 'react';
const LABEL_8136 = 'component_8136';
export function Component8136({ value = 8136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8136, 'data-value': derived.doubled }, children);
}
export default Component8136;
