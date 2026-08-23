import React from 'react';
const LABEL_8177 = 'component_8177';
export function Component8177({ value = 8177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8177, 'data-value': derived.doubled }, children);
}
export default Component8177;
