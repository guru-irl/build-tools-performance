import React from 'react';
const LABEL_28863 = 'component_28863';
export function Component28863({ value = 28863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28863, 'data-value': derived.doubled }, children);
}
export default Component28863;
