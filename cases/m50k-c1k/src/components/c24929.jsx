import React from 'react';
const LABEL_24929 = 'component_24929';
export function Component24929({ value = 24929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24929, 'data-value': derived.doubled }, children);
}
export default Component24929;
