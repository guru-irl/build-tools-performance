import React from 'react';
const LABEL_35688 = 'component_35688';
export function Component35688({ value = 35688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35688, 'data-value': derived.doubled }, children);
}
export default Component35688;
