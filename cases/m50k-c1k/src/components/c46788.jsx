import React from 'react';
const LABEL_46788 = 'component_46788';
export function Component46788({ value = 46788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46788, 'data-value': derived.doubled }, children);
}
export default Component46788;
