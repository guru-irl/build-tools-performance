import React from 'react';
const LABEL_20909 = 'component_20909';
export function Component20909({ value = 20909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20909, 'data-value': derived.doubled }, children);
}
export default Component20909;
