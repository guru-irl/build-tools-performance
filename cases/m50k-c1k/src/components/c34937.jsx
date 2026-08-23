import React from 'react';
const LABEL_34937 = 'component_34937';
export function Component34937({ value = 34937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34937, 'data-value': derived.doubled }, children);
}
export default Component34937;
