import React from 'react';
const LABEL_11963 = 'component_11963';
export function Component11963({ value = 11963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11963, 'data-value': derived.doubled }, children);
}
export default Component11963;
