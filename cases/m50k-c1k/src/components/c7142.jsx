import React from 'react';
const LABEL_7142 = 'component_7142';
export function Component7142({ value = 7142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7142, 'data-value': derived.doubled }, children);
}
export default Component7142;
