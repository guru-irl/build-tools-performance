import React from 'react';
const LABEL_10142 = 'component_10142';
export function Component10142({ value = 10142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10142, 'data-value': derived.doubled }, children);
}
export default Component10142;
