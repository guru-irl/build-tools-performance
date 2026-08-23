import React from 'react';
const LABEL_18420 = 'component_18420';
export function Component18420({ value = 18420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18420, 'data-value': derived.doubled }, children);
}
export default Component18420;
