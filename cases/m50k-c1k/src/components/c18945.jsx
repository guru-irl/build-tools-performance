import React from 'react';
const LABEL_18945 = 'component_18945';
export function Component18945({ value = 18945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18945, 'data-value': derived.doubled }, children);
}
export default Component18945;
