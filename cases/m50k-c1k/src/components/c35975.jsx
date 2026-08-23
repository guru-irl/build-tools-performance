import React from 'react';
const LABEL_35975 = 'component_35975';
export function Component35975({ value = 35975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35975, 'data-value': derived.doubled }, children);
}
export default Component35975;
