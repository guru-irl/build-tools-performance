import React from 'react';
const LABEL_18994 = 'component_18994';
export function Component18994({ value = 18994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18994, 'data-value': derived.doubled }, children);
}
export default Component18994;
