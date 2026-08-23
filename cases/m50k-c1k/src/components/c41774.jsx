import React from 'react';
const LABEL_41774 = 'component_41774';
export function Component41774({ value = 41774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41774, 'data-value': derived.doubled }, children);
}
export default Component41774;
