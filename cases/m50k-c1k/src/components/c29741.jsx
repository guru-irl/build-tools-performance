import React from 'react';
const LABEL_29741 = 'component_29741';
export function Component29741({ value = 29741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29741, 'data-value': derived.doubled }, children);
}
export default Component29741;
