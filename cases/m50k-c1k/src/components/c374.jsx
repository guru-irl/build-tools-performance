import React from 'react';
const LABEL_374 = 'component_374';
export function Component374({ value = 374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_374, 'data-value': derived.doubled }, children);
}
export default Component374;
