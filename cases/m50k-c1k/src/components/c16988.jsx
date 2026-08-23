import React from 'react';
const LABEL_16988 = 'component_16988';
export function Component16988({ value = 16988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16988, 'data-value': derived.doubled }, children);
}
export default Component16988;
