import React from 'react';
const LABEL_37820 = 'component_37820';
export function Component37820({ value = 37820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37820, 'data-value': derived.doubled }, children);
}
export default Component37820;
