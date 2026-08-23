import React from 'react';
const LABEL_28988 = 'component_28988';
export function Component28988({ value = 28988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28988, 'data-value': derived.doubled }, children);
}
export default Component28988;
