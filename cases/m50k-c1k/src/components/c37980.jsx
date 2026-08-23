import React from 'react';
const LABEL_37980 = 'component_37980';
export function Component37980({ value = 37980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37980, 'data-value': derived.doubled }, children);
}
export default Component37980;
