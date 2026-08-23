import React from 'react';
const LABEL_40019 = 'component_40019';
export function Component40019({ value = 40019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40019, 'data-value': derived.doubled }, children);
}
export default Component40019;
