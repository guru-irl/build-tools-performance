import React from 'react';
const LABEL_45142 = 'component_45142';
export function Component45142({ value = 45142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45142, 'data-value': derived.doubled }, children);
}
export default Component45142;
