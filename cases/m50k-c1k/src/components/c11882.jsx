import React from 'react';
const LABEL_11882 = 'component_11882';
export function Component11882({ value = 11882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11882, 'data-value': derived.doubled }, children);
}
export default Component11882;
