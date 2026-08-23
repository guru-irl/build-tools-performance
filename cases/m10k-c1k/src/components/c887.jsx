import React from 'react';
const LABEL_887 = 'component_887';
export function Component887({ value = 887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_887, 'data-value': derived.doubled }, children);
}
export default Component887;
