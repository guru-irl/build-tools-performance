import React from 'react';
const LABEL_8716 = 'component_8716';
export function Component8716({ value = 8716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8716, 'data-value': derived.doubled }, children);
}
export default Component8716;
