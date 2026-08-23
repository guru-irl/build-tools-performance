import React from 'react';
const LABEL_37963 = 'component_37963';
export function Component37963({ value = 37963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37963, 'data-value': derived.doubled }, children);
}
export default Component37963;
