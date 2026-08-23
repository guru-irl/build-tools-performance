import React from 'react';
const LABEL_34963 = 'component_34963';
export function Component34963({ value = 34963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34963, 'data-value': derived.doubled }, children);
}
export default Component34963;
