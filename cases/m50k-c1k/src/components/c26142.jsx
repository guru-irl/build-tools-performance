import React from 'react';
const LABEL_26142 = 'component_26142';
export function Component26142({ value = 26142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26142, 'data-value': derived.doubled }, children);
}
export default Component26142;
