import React from 'react';
const LABEL_8929 = 'component_8929';
export function Component8929({ value = 8929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8929, 'data-value': derived.doubled }, children);
}
export default Component8929;
