import React from 'react';
const LABEL_31301 = 'component_31301';
export function Component31301({ value = 31301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31301, 'data-value': derived.doubled }, children);
}
export default Component31301;
