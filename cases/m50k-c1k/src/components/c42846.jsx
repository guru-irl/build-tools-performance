import React from 'react';
const LABEL_42846 = 'component_42846';
export function Component42846({ value = 42846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42846, 'data-value': derived.doubled }, children);
}
export default Component42846;
