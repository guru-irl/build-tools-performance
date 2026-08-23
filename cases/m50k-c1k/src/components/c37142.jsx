import React from 'react';
const LABEL_37142 = 'component_37142';
export function Component37142({ value = 37142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37142, 'data-value': derived.doubled }, children);
}
export default Component37142;
