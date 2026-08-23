import React from 'react';
const LABEL_45077 = 'component_45077';
export function Component45077({ value = 45077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45077, 'data-value': derived.doubled }, children);
}
export default Component45077;
