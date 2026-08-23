import React from 'react';
const LABEL_24209 = 'component_24209';
export function Component24209({ value = 24209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24209, 'data-value': derived.doubled }, children);
}
export default Component24209;
