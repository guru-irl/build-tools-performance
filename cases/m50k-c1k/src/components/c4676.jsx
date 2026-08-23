import React from 'react';
const LABEL_4676 = 'component_4676';
export function Component4676({ value = 4676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4676, 'data-value': derived.doubled }, children);
}
export default Component4676;
