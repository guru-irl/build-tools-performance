import React from 'react';
const LABEL_8217 = 'component_8217';
export function Component8217({ value = 8217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8217, 'data-value': derived.doubled }, children);
}
export default Component8217;
