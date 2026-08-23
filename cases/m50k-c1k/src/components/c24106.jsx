import React from 'react';
const LABEL_24106 = 'component_24106';
export function Component24106({ value = 24106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24106, 'data-value': derived.doubled }, children);
}
export default Component24106;
