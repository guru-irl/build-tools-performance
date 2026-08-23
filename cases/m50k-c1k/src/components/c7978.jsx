import React from 'react';
const LABEL_7978 = 'component_7978';
export function Component7978({ value = 7978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7978, 'data-value': derived.doubled }, children);
}
export default Component7978;
