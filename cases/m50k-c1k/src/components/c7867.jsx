import React from 'react';
const LABEL_7867 = 'component_7867';
export function Component7867({ value = 7867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7867, 'data-value': derived.doubled }, children);
}
export default Component7867;
