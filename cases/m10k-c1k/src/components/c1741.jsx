import React from 'react';
const LABEL_1741 = 'component_1741';
export function Component1741({ value = 1741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1741, 'data-value': derived.doubled }, children);
}
export default Component1741;
