import React from 'react';
const LABEL_34766 = 'component_34766';
export function Component34766({ value = 34766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34766, 'data-value': derived.doubled }, children);
}
export default Component34766;
