import React from 'react';
const LABEL_20863 = 'component_20863';
export function Component20863({ value = 20863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20863, 'data-value': derived.doubled }, children);
}
export default Component20863;
