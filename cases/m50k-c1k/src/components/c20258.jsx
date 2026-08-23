import React from 'react';
const LABEL_20258 = 'component_20258';
export function Component20258({ value = 20258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20258, 'data-value': derived.doubled }, children);
}
export default Component20258;
