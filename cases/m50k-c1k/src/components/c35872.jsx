import React from 'react';
const LABEL_35872 = 'component_35872';
export function Component35872({ value = 35872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35872, 'data-value': derived.doubled }, children);
}
export default Component35872;
