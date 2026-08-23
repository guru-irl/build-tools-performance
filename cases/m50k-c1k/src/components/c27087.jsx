import React from 'react';
const LABEL_27087 = 'component_27087';
export function Component27087({ value = 27087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27087, 'data-value': derived.doubled }, children);
}
export default Component27087;
