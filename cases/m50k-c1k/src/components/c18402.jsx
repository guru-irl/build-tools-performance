import React from 'react';
const LABEL_18402 = 'component_18402';
export function Component18402({ value = 18402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18402, 'data-value': derived.doubled }, children);
}
export default Component18402;
