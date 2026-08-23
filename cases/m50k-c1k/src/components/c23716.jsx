import React from 'react';
const LABEL_23716 = 'component_23716';
export function Component23716({ value = 23716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23716, 'data-value': derived.doubled }, children);
}
export default Component23716;
