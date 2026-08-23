import React from 'react';
const LABEL_25788 = 'component_25788';
export function Component25788({ value = 25788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25788, 'data-value': derived.doubled }, children);
}
export default Component25788;
