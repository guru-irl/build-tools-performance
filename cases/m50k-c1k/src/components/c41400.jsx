import React from 'react';
const LABEL_41400 = 'component_41400';
export function Component41400({ value = 41400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41400, 'data-value': derived.doubled }, children);
}
export default Component41400;
