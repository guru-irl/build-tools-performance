import React from 'react';
const LABEL_36357 = 'component_36357';
export function Component36357({ value = 36357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36357, 'data-value': derived.doubled }, children);
}
export default Component36357;
