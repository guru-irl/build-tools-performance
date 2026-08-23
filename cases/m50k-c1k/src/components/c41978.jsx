import React from 'react';
const LABEL_41978 = 'component_41978';
export function Component41978({ value = 41978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41978, 'data-value': derived.doubled }, children);
}
export default Component41978;
