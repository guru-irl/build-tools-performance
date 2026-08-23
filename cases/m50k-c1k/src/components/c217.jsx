import React from 'react';
const LABEL_217 = 'component_217';
export function Component217({ value = 217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_217, 'data-value': derived.doubled }, children);
}
export default Component217;
