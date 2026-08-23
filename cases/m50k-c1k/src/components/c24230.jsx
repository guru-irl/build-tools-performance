import React from 'react';
const LABEL_24230 = 'component_24230';
export function Component24230({ value = 24230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24230, 'data-value': derived.doubled }, children);
}
export default Component24230;
