import React from 'react';
const LABEL_18863 = 'component_18863';
export function Component18863({ value = 18863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18863, 'data-value': derived.doubled }, children);
}
export default Component18863;
