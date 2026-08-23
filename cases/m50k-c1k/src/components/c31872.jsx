import React from 'react';
const LABEL_31872 = 'component_31872';
export function Component31872({ value = 31872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31872, 'data-value': derived.doubled }, children);
}
export default Component31872;
