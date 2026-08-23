import React from 'react';
const LABEL_20033 = 'component_20033';
export function Component20033({ value = 20033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20033, 'data-value': derived.doubled }, children);
}
export default Component20033;
