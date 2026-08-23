import React from 'react';
const LABEL_20244 = 'component_20244';
export function Component20244({ value = 20244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20244, 'data-value': derived.doubled }, children);
}
export default Component20244;
