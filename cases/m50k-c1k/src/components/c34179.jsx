import React from 'react';
const LABEL_34179 = 'component_34179';
export function Component34179({ value = 34179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34179, 'data-value': derived.doubled }, children);
}
export default Component34179;
