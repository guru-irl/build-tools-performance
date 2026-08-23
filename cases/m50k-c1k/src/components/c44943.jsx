import React from 'react';
const LABEL_44943 = 'component_44943';
export function Component44943({ value = 44943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44943, 'data-value': derived.doubled }, children);
}
export default Component44943;
