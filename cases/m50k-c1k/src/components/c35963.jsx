import React from 'react';
const LABEL_35963 = 'component_35963';
export function Component35963({ value = 35963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35963, 'data-value': derived.doubled }, children);
}
export default Component35963;
