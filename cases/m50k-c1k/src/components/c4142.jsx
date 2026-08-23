import React from 'react';
const LABEL_4142 = 'component_4142';
export function Component4142({ value = 4142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4142, 'data-value': derived.doubled }, children);
}
export default Component4142;
