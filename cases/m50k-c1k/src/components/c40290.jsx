import React from 'react';
const LABEL_40290 = 'component_40290';
export function Component40290({ value = 40290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40290, 'data-value': derived.doubled }, children);
}
export default Component40290;
