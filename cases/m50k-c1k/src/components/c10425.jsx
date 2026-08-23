import React from 'react';
const LABEL_10425 = 'component_10425';
export function Component10425({ value = 10425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10425, 'data-value': derived.doubled }, children);
}
export default Component10425;
