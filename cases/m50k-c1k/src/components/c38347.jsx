import React from 'react';
const LABEL_38347 = 'component_38347';
export function Component38347({ value = 38347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38347, 'data-value': derived.doubled }, children);
}
export default Component38347;
