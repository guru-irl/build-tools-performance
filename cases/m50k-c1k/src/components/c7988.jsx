import React from 'react';
const LABEL_7988 = 'component_7988';
export function Component7988({ value = 7988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7988, 'data-value': derived.doubled }, children);
}
export default Component7988;
