import React from 'react';
const LABEL_42630 = 'component_42630';
export function Component42630({ value = 42630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42630, 'data-value': derived.doubled }, children);
}
export default Component42630;
