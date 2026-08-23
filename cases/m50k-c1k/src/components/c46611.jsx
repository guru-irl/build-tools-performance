import React from 'react';
const LABEL_46611 = 'component_46611';
export function Component46611({ value = 46611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46611, 'data-value': derived.doubled }, children);
}
export default Component46611;
