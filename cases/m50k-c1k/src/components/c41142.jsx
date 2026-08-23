import React from 'react';
const LABEL_41142 = 'component_41142';
export function Component41142({ value = 41142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41142, 'data-value': derived.doubled }, children);
}
export default Component41142;
