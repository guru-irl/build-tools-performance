import React from 'react';
const LABEL_24142 = 'component_24142';
export function Component24142({ value = 24142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24142, 'data-value': derived.doubled }, children);
}
export default Component24142;
