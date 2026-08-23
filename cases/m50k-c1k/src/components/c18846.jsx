import React from 'react';
const LABEL_18846 = 'component_18846';
export function Component18846({ value = 18846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18846, 'data-value': derived.doubled }, children);
}
export default Component18846;
