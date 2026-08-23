import React from 'react';
const LABEL_41110 = 'component_41110';
export function Component41110({ value = 41110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41110, 'data-value': derived.doubled }, children);
}
export default Component41110;
