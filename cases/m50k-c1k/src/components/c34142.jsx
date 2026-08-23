import React from 'react';
const LABEL_34142 = 'component_34142';
export function Component34142({ value = 34142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34142, 'data-value': derived.doubled }, children);
}
export default Component34142;
