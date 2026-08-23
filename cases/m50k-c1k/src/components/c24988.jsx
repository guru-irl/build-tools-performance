import React from 'react';
const LABEL_24988 = 'component_24988';
export function Component24988({ value = 24988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24988, 'data-value': derived.doubled }, children);
}
export default Component24988;
