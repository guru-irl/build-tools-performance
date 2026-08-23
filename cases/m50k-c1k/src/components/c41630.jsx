import React from 'react';
const LABEL_41630 = 'component_41630';
export function Component41630({ value = 41630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41630, 'data-value': derived.doubled }, children);
}
export default Component41630;
