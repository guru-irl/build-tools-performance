import React from 'react';
const LABEL_28887 = 'component_28887';
export function Component28887({ value = 28887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28887, 'data-value': derived.doubled }, children);
}
export default Component28887;
