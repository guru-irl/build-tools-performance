import React from 'react';
const LABEL_35948 = 'component_35948';
export function Component35948({ value = 35948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35948, 'data-value': derived.doubled }, children);
}
export default Component35948;
