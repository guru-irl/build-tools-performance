import React from 'react';
const LABEL_42978 = 'component_42978';
export function Component42978({ value = 42978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42978, 'data-value': derived.doubled }, children);
}
export default Component42978;
