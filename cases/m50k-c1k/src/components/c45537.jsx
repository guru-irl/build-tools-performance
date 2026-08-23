import React from 'react';
const LABEL_45537 = 'component_45537';
export function Component45537({ value = 45537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45537, 'data-value': derived.doubled }, children);
}
export default Component45537;
