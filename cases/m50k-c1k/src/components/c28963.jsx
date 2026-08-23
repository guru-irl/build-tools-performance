import React from 'react';
const LABEL_28963 = 'component_28963';
export function Component28963({ value = 28963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28963, 'data-value': derived.doubled }, children);
}
export default Component28963;
