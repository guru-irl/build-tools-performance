import React from 'react';
const LABEL_31887 = 'component_31887';
export function Component31887({ value = 31887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31887, 'data-value': derived.doubled }, children);
}
export default Component31887;
