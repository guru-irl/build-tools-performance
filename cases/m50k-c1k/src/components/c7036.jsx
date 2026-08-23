import React from 'react';
const LABEL_7036 = 'component_7036';
export function Component7036({ value = 7036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7036, 'data-value': derived.doubled }, children);
}
export default Component7036;
