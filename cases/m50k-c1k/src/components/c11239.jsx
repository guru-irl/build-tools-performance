import React from 'react';
const LABEL_11239 = 'component_11239';
export function Component11239({ value = 11239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11239, 'data-value': derived.doubled }, children);
}
export default Component11239;
