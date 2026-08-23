import React from 'react';
const LABEL_18110 = 'component_18110';
export function Component18110({ value = 18110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18110, 'data-value': derived.doubled }, children);
}
export default Component18110;
