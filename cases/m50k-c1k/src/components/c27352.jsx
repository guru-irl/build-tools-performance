import React from 'react';
const LABEL_27352 = 'component_27352';
export function Component27352({ value = 27352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27352, 'data-value': derived.doubled }, children);
}
export default Component27352;
