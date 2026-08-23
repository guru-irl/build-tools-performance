import React from 'react';
const LABEL_5963 = 'component_5963';
export function Component5963({ value = 5963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5963, 'data-value': derived.doubled }, children);
}
export default Component5963;
