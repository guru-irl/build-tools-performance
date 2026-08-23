import React from 'react';
const LABEL_40988 = 'component_40988';
export function Component40988({ value = 40988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40988, 'data-value': derived.doubled }, children);
}
export default Component40988;
