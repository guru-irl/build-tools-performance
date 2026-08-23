import React from 'react';
const LABEL_28410 = 'component_28410';
export function Component28410({ value = 28410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28410, 'data-value': derived.doubled }, children);
}
export default Component28410;
