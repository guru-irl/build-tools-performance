import React from 'react';
const LABEL_19231 = 'component_19231';
export function Component19231({ value = 19231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19231, 'data-value': derived.doubled }, children);
}
export default Component19231;
