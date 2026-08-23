import React from 'react';
const LABEL_19384 = 'component_19384';
export function Component19384({ value = 19384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19384, 'data-value': derived.doubled }, children);
}
export default Component19384;
