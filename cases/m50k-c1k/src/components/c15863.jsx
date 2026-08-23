import React from 'react';
const LABEL_15863 = 'component_15863';
export function Component15863({ value = 15863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15863, 'data-value': derived.doubled }, children);
}
export default Component15863;
