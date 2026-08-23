import React from 'react';
const LABEL_28290 = 'component_28290';
export function Component28290({ value = 28290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28290, 'data-value': derived.doubled }, children);
}
export default Component28290;
