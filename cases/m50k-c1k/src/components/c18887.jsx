import React from 'react';
const LABEL_18887 = 'component_18887';
export function Component18887({ value = 18887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18887, 'data-value': derived.doubled }, children);
}
export default Component18887;
