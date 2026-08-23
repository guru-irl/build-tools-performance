import React from 'react';
const LABEL_19142 = 'component_19142';
export function Component19142({ value = 19142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19142, 'data-value': derived.doubled }, children);
}
export default Component19142;
