import React from 'react';
const LABEL_46142 = 'component_46142';
export function Component46142({ value = 46142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46142, 'data-value': derived.doubled }, children);
}
export default Component46142;
