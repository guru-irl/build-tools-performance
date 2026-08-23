import React from 'react';
const LABEL_20463 = 'component_20463';
export function Component20463({ value = 20463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20463, 'data-value': derived.doubled }, children);
}
export default Component20463;
