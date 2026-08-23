import React from 'react';
const LABEL_14019 = 'component_14019';
export function Component14019({ value = 14019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14019, 'data-value': derived.doubled }, children);
}
export default Component14019;
