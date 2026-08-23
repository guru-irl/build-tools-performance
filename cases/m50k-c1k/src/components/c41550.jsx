import React from 'react';
const LABEL_41550 = 'component_41550';
export function Component41550({ value = 41550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41550, 'data-value': derived.doubled }, children);
}
export default Component41550;
