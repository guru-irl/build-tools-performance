import React from 'react';
const LABEL_20166 = 'component_20166';
export function Component20166({ value = 20166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20166, 'data-value': derived.doubled }, children);
}
export default Component20166;
