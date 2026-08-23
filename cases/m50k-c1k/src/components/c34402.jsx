import React from 'react';
const LABEL_34402 = 'component_34402';
export function Component34402({ value = 34402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34402, 'data-value': derived.doubled }, children);
}
export default Component34402;
