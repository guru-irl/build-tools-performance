import React from 'react';
const LABEL_19550 = 'component_19550';
export function Component19550({ value = 19550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19550, 'data-value': derived.doubled }, children);
}
export default Component19550;
