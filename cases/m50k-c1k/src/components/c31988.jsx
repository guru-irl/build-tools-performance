import React from 'react';
const LABEL_31988 = 'component_31988';
export function Component31988({ value = 31988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31988, 'data-value': derived.doubled }, children);
}
export default Component31988;
