import React from 'react';
const LABEL_46645 = 'component_46645';
export function Component46645({ value = 46645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46645, 'data-value': derived.doubled }, children);
}
export default Component46645;
