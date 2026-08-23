import React from 'react';
const LABEL_19963 = 'component_19963';
export function Component19963({ value = 19963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19963, 'data-value': derived.doubled }, children);
}
export default Component19963;
