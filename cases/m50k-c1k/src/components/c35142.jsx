import React from 'react';
const LABEL_35142 = 'component_35142';
export function Component35142({ value = 35142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35142, 'data-value': derived.doubled }, children);
}
export default Component35142;
