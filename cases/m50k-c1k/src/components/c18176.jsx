import React from 'react';
const LABEL_18176 = 'component_18176';
export function Component18176({ value = 18176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18176, 'data-value': derived.doubled }, children);
}
export default Component18176;
