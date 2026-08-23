import React from 'react';
const LABEL_10585 = 'component_10585';
export function Component10585({ value = 10585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10585, 'data-value': derived.doubled }, children);
}
export default Component10585;
