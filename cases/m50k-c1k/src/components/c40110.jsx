import React from 'react';
const LABEL_40110 = 'component_40110';
export function Component40110({ value = 40110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40110, 'data-value': derived.doubled }, children);
}
export default Component40110;
