import React from 'react';
const LABEL_26120 = 'component_26120';
export function Component26120({ value = 26120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26120, 'data-value': derived.doubled }, children);
}
export default Component26120;
