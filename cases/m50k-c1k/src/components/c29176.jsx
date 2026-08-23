import React from 'react';
const LABEL_29176 = 'component_29176';
export function Component29176({ value = 29176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29176, 'data-value': derived.doubled }, children);
}
export default Component29176;
