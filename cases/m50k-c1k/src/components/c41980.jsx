import React from 'react';
const LABEL_41980 = 'component_41980';
export function Component41980({ value = 41980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41980, 'data-value': derived.doubled }, children);
}
export default Component41980;
