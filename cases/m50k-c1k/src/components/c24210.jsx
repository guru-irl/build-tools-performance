import React from 'react';
const LABEL_24210 = 'component_24210';
export function Component24210({ value = 24210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24210, 'data-value': derived.doubled }, children);
}
export default Component24210;
