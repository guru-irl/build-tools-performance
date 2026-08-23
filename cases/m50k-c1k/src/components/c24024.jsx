import React from 'react';
const LABEL_24024 = 'component_24024';
export function Component24024({ value = 24024, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24024, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24024, 'data-value': derived.doubled }, children);
}
export default Component24024;
