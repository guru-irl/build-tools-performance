import React from 'react';
const LABEL_40366 = 'component_40366';
export function Component40366({ value = 40366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40366, 'data-value': derived.doubled }, children);
}
export default Component40366;
