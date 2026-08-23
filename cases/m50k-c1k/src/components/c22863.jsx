import React from 'react';
const LABEL_22863 = 'component_22863';
export function Component22863({ value = 22863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22863, 'data-value': derived.doubled }, children);
}
export default Component22863;
