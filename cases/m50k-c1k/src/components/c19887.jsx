import React from 'react';
const LABEL_19887 = 'component_19887';
export function Component19887({ value = 19887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19887, 'data-value': derived.doubled }, children);
}
export default Component19887;
