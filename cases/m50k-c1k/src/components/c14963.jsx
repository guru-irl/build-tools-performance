import React from 'react';
const LABEL_14963 = 'component_14963';
export function Component14963({ value = 14963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14963, 'data-value': derived.doubled }, children);
}
export default Component14963;
